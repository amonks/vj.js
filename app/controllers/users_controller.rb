class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = match_nickname_or_id
    @scripts = @user.scripts.all
    @realms = @user.realms.all
  end

  def me
    @user = current_user
    @scripts = @user.scripts.all
    @realms = @user.realms.all
    render :file => "users/show.html.slim"
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :name)
    end

    def match_nickname_or_id
      if params[:nickname]
        User.find_by nickname: params[:nickname]
      elsif params[:id]
        User.find params[:id]
      end
    end

end
