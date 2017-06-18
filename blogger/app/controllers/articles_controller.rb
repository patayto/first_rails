class ArticlesController < ApplicationController

  def index
    # @ means articles is an instance variable, so it can be accessed from outside of this class
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

end
