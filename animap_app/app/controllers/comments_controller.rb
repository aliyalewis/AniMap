class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments
  end

  def show
    comment = Comment.find_by(id: params[:id])
    render json: comment
  end

  def new
    comment = Comment.new
  end

  def create
      comment = Comment.create(title: params["comment"]["title"], body: params["comment"]["body"], user_id: params["comment"]["user_id"])
      render json: comment
  end

  def update
    comment = Comment.find_by(id: params[:id])
    comment.title = params["comment"]["title"]
    comment.body = params["comment"]["body"]
    comment.save
    render json: comment
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
  end

end
