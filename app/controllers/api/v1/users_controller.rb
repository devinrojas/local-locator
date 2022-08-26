class Api::V1::UsersController < ApiController
    def show
      render json: User.friendly.find(params[:id])

      # eventually we will also add the games that this user is playying to the serializer 
    end
  end
  
