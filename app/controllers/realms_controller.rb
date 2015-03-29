class RealmsController < ApplicationController
  before_action :authenticate_user!

  def index
    @realms = Realm.all
  end

  def display
    @user = User.find_by nickname: params[:user_nickname]
    @realm = Realm.find_by user_id: @user.id, title: params[:title]
    @script = Script.find @realm.script_id
    render layout: false
  end

  def show
    @user = User.find_by nickname: params[:user_nickname]
    @realm = Realm.find_by title: params[:title], user_id: @user.id

    respond_to do |format|
      format.html { render :file => 'realms/show.html.slim' }
      format.js {
        render file: 'realms/launch.js.erb',
               content_type: 'text/javascript'
      }
    end
  end

  def edit
    @user = User.find_by nickname: params[:user_nickname]
    @realm = Realm.find_by title: params[:title], user_id: @user.id

    authorize_action_for @realm
  end

  def create
    @user = User.find_by nickname: params[:user_nickname]
    @realm = @user.realms.create(realm_params)

    authorize_action_for @realm

    if @realm.save
      redirect_to dashboard_path
    else
      render 'new'
    end
  end

  def update
    @user = User.find_by nickname: params[:user_nickname]
    @realm = Realm.find_by title: params[:title], user_id: @user.id

    authorize_action_for @realm

    if @realm.update(realm_params)
      redirect_to dashboard_path
    else
      render 'edit'
    end
  end

  def destroy
    @user = User.find_by nickname: params[:user_nickname]
    @realm = Realm.find_by title: params[:title], user_id: @user.id

    authorize_action_for @realm

    @realm.destroy

    redirect_to dashboard_path
  end

  private

    def realm_params
      params.require(:realm).permit(:user_nickname, :title, :script_id)
    end

end

