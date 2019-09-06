class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments
  end

  def show
    comment = Region.find_by(id: params["comment"]["id"])
    render json: region
  end

  def new
    comment = Comment.new(title: params["comment"]["title"], body: params["comment"]["body"], user_id: params["coment"]["user_id"], animal_id: params["comment"]["animal_id"])
  end

end
