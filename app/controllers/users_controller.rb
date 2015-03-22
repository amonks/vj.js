class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = match_uid_or_id
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
      params.require(:user).permit(:uid, :name)
    end

    def match_uid_or_id
      if params[:uid]
        User.find_by uid: params[:uid]
      elsif params[:id]
        User.find params[:id]
      end
    end

end
