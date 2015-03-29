class ExternalsController < ApplicationController
  before_action :authenticate_user!

  def create
    @user = User.find_by nickname: params[:user_nickname]
    @script = @user.scripts.find_by title: params[:script_title]
    @external = @script.externals.create(external_params)

    authorize_action_for @script

    if @external.save
      redirect_to @external.path
    else
      redirect_to dashboard_url
    end
  end

  def update
    @user = User.find_by nickname: params[:user_nickname]
    @script = @user.scripts.find_by title: params[:script_title]
    @external = @script.externals.find_by export: params[:export]

    authorize_action_for @script

    if @external.update(external_params)
      redirect_to @external.path
    else
      render 'edit'
    end
  end

  def destroy
    @user = User.find_by nickname: params[:user_nickname]
    @script = @user.scripts.find_by title: params[:script_title]
    @external = @script.externals.find_by export: params[:export]

    @external.destroy

    authorize_action_for @script

    redirect_to @script.path
  end

  private

    def external_params
      params.require(:external).permit(:export, :url, :needs_shim, :deps )
    end

end
