class RealmsController < ApplicationController
  def index
    @realms = Realm.all
  end

  def display
    @user = User.find_by nickname: params[:nickname]
    @realm = Realm.find_by user_id: @user.id, title: params[:realm_title]
    @script = Script.find @realm.script_id
    render layout: false
  end

  def show
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

  def edit
    @user = User.find_by nickname: params[:user_nickname]
    @realm = Realm.find_by title: params[:realm_title], user_id: @user.id
  end

  def create
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
      params.require(:realm).permit(:title, :script_id, :description)
    end

end

