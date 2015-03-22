class RealmsController < ApplicationController
  def index
    @realms = Realm.all
  end

  def index_by_user
    @user = User.find_by nickname: params[:nickname]
    @realms = @user.realms.all
    render file: 'realms/index.html.slim'
  end

  def display
    @realm = Realm.find(params[:id])
    render layout: false
  end

  def display_by_user
    @user = User.find_by nickname: params[:nickname]
    @realm = Realm.find_by title: params[:realm_title], user_id: @user.id
    render layout: false, file: 'realms/display.html.slim'
  end

  def show
    @realm = Realm.find(params[:id])
  end

  def show_by_user
    @user = User.find_by nickname: params[:nickname]
    @realm = Realm.find_by title: params[:realm_title], user_id: @user.id
    respond_to do |format|
      format.html { render :file => 'realms/show.html.slim' }
      format.js { render :text => @realm.text }
    end
  end

  def new
    @realm = Realm.new
  end

  def create
    binding.pry
    @realm = current_user.realms.create(realm_params)

    if @realm.save
      redirect_to @realm
    else
      render 'new'
    end
  end

  def update
    @realm = Realm.find(params[:id])

    if @realm.update(realm_params)
      redirect_to @realm
    else
      render 'edit'
    end
  end

  def destroy
    @realm = Realm.find(params[:id])
    @realm.destroy

    redirect_to realms_path
  end

  private
    def realm_params
      params.require(:realm).permit(:title, :text, :description)
    end

end

