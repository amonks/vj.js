# Load Dependencies
require 'bundler'
Bundler.require
require 'json'

if ENV['RACK_ENV'] != 'production'
  Dotenv.load
end

# connect to DB
DB = Sequel.connect(ENV['DATABASE_URL'])


set :partial_template_engine, :slim



# migrate up

get '/migrate' do
  migrateDatabase(DB)
end
def migrateDatabase(db)
  db.create_table :scenes do
    String :title
    String :author
    String :version
    DateTime :date_created
    Serial :scene_id
    Text :scene_js
  end
end


# root

get '/' do
  redirect '/scenes'
end


# flush

get '/flush' do
  data = DB[:scenes]
  data.delete
  redirect '/'
end


# list scenes

get '/scenes' do
  data = DB[:scenes]

  @scenes = data.all

  slim :list
end


# create scene

get '/create' do
  @scene = {}
  slim :create
end
post '/create' do
  data = DB[:scenes]

  @scene = params[:scene].first

  data.insert(@scene)
  redirect '/scenes'
end


# show scene

get '/scenes/:title/show' do
  data = DB[:scenes]

  @scene = data.where(:title => params[:title]).first

  slim :show
end


# delete scene

get '/scenes/:title/delete' do
  data = DB[:scenes]

  @scene = data.where(:title => params[:title]).delete

  redirect '/scenes'
end


# edit scene

get '/scenes/:title/edit' do
  data = DB[:scenes]
  @scene = data.where(:title => params[:title]).first
  slim :edit
end
post '/scenes/:title/edit' do
  data = DB[:scenes]

  @scene = params[:scene].first

  data.where(:title => params[:title]).first.update(@scene)

  redirect '/scenes'
end


# vj!

get '/vj' do
  File.read(File.join('public', 'index.html'))
end

# support

get '/scenes/list' do
  data = DB[:scenes]
  sceneList = data.map { |scene| scene[:title] }
  sceneList.to_json
end

get '/js/scenes/:title/js.js' do
  content_type 'application/javascript'
  data = DB[:scenes]
  scene = data.where(:title => params[:title]).first
  scene[:scene_js]
end
