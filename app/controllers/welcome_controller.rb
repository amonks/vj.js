class WelcomeController < ApplicationController
  def index
    if user_signed_in?
      @user = current_user
      @realms = @user.realms
      @scripts = @user.scripts
      render 'users/show'
      return
    end
    render layout: 'devise'
  end


  def resource_name
    return :user
  end
end
