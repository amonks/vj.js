class DocsController < ApplicationController
  before_action :authenticate_user!

  def index
    @docs = Doc.all
  end

  def show
    @doc = Doc.find_by title: params[:title]
  end

  def edit
    @doc = Doc.find_by title: params[:title]
    authorize_action_for @doc
  end

  def create
    @doc = Doc.create(doc_params)

    authorize_action_for @doc

    if @doc.save
      redirect_to dashboard_path
    else
      render 'new'
    end
  end

  def update
    @doc = Doc.find_by title: params[:title]

    authorize_action_for @doc

    if @doc.update(doc_params)
      redirect_to dashboard_path
    else
      render 'edit'
    end
  end

  def destroy
    @doc = Doc.find_by title: params[:title]

    authorize_action_for @doco

    @doc.destroy

    redirect_to dashboard_path
  end

  private

  def doc_params
    params.require(:doc).permit(:title, :number, :text)
  end

end
