class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @scripts = @user.scripts.all
  end

  def me
    @user = current_user
  end

end
