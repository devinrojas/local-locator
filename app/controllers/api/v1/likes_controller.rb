class Api::V1::LikesController < ApiController

    def create        
        existing_like = Like.find_by(local_id: params[:local_id], user: current_user)
        if existing_like.blank?
            like = Like.new(user: current_user, local_id: params[:local_id])
            if like.save
              render json: like
            else  
                render json: {error: "something went wrong"}
            end
        else  
            deleted_like_id = existing_like.id
            existing_like.destroy
            render json: { deleted_like_id: deleted_like_id }
        end
    end

end
