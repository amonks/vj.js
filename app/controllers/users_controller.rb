class UsersController < ApplicationController

  # before_action :authenticate_user!

  def index
    authenticate_user!

    @users = User.all
  end

  def show
    authenticate_user!

    @user = User.find_by nickname: params[:nickname]
    @scripts = @user.scripts.all
    @realms = @user.realms.all
  end

  def dashboard
    authenticate_user!

    @user = current_user
    @scripts = @user.scripts.all
    @realms = @user.realms.all
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :name, :email)
    end

end
