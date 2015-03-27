class ExternalsController < ApplicationController
  before_action :authenticate_user!

  def create
    @user = User.find_by nickname: params[:user_nickname]
    @realm = @user.realms.find_by title: params[:realm_title]
    @external = @realm.externals.create(external_params)

    if @external.save
      redirect_to user_realm_path(@user, @realm)
    else
      redirect_to dashboard_url
    end
  end

  def update
    @user = User.find_by nickname: params[:user_nickname]
    @realm = @user.realms.find_by title: params[:realm_title]
    @external = @realm.externals.find_by export: params[:export]

    if @external.update(external_params)
      redirect_to user_realm_path(@user, @realm)
    else
      render 'edit'
    end
  end

  def destroy
    @user = User.find_by nickname: params[:user_nickname]
    @realm = @user.realms.find_by title: params[:realm_title]
    @external = @realm.externals.find_by export: params[:export]
    @external.destroy

    redirect_to user_realm_path(@user, @realm)
  end

  private
    def external_params
      params.require(:external).permit(:export, :url, :needs_shim, :deps )
    end

end
