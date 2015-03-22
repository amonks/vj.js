class ScriptsController < ApplicationController
  def index
    @scripts = Script.all
  end

  def show
    @script = Script.find(params[:id])
  end

  def show_by_user
    @user = User.find_by name: params[:uid]
    @script = Script.find_by title: params[:script_title], user_id: @user.id
    respond_to do |format|
      format.html { render :file => 'scripts/show.html.slim' }
      format.js { render :text => @script.text }
    end
  end

  def new
    @script = Script.new
  end

  def edit
    @script = Script.find(params[:id])
  end

  def create
    @script = current_user.scripts.create(script_params)

    if @script.save
      redirect_to @script
    else
      render 'new'
    end
  end

  def update
    @script = Script.find(params[:id])

    if @script.update(script_params)
      redirect_to @script
    else
      render 'edit'
    end
  end

  def destroy
    @script = Script.find(params[:id])
    @script.destroy

    redirect_to scripts_path
  end

  private
    def script_params
      params.require(:script).permit(:title, :text)
    end

end
