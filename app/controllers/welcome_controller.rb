class WelcomeController < ApplicationController
  def index
    if user_signed_in?
      redirect_to dashboard_url
      return
    end
    render layout: 'devise'
    # render layout: 'devise'
  end


  def resource_name
    return :user
  end
end
