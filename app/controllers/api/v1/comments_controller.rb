class Api::V1::CommentsController < ApiController
    protect_from_forgery unless: -> {request.format.json? }
    before_action :authenticate_user
    before_action :authorize_user, except: [:create]
    
    def create
      comment = Comment.new(local_id: params[:local_id], user: current_user)
      comment.local_id = params[:local_id]
      comment.user_id = current_user[:id]
  
      if comment.save
        render json: comment
      else 
        render json: {error: "something went wrong"}
      end
    end
  
    def destroy
      comment = Comment.find(params[:id])
  
      if comment.destroy
        render json: {status: 200}
      else
        render json: {error: "There was an error trying to delete this comment. Try Again.", status: :not_implemented}
      end
    end
  
    private 
  
    def authenticate_user
      if !user_signed_in?
        render json: {error: ["you must be signed in to comment"]}
      end
    end
  
    def authorize_user
      if !user_signed_in? || !(current_user.id == Comment.find(params['id']).user.id) && !(current_user.role == 'admin')
        render json: {error: ["Only admins have access to this feature"]}
      end
    end
  
  end 