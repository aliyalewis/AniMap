class UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(username: params["user"]["username"])
    if user
      render json: user
    else
      render json: { message: "user not found"}
    end
  end

end
