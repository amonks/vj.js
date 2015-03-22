class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = match_name_or_id
    @scripts = @user.scripts.all
    @realms = @user.realms.all
  end

  def me
    @user = current_user
    @scripts = @user.scripts.all
    @realms = @user.realms.all
    render :file => "users/show.html.slim"
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy

    redirect_to users_path
  end

  private
    def user_params
      params.require(:user).permit(:name)
    end

    def match_name_or_id
      if params[:user_name]
        User.find_by name: params[:user_name]
      elsif params[:user_id]
        User.find params[:user_id]
      elsif params[:id]
        User.find params[:id]
      else
        nil
      end
    end

end
