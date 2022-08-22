class Api::V1::LocalsController < ApiController
    before_action :authenticate_user_fetch!, except: [:index, :show]
    before_action :authorize_user, only: [:delete]

    def index
      locals = Local.all
      render json: locals
    end

    def show
        local = Local.friendly.find(params[:id])
        render json: local
    end

    def create
        local = Local.new(local_params)
        if local.save
          render json: local
        else
          render json: { errors: local.errors.full_messages }, status: 400
        end
      end

      def edit
        local = Local.friendly.find(params[:id])
      end
    
      def update
        local = Local.friendly.find(params[:id])
    
        if local.update(local_params)
          flash[:notice] = "Local updated successfully"
          redirect_to locals_path
        else
          flash.now[:error] = local.errors.full_messages.to_sentence
          render :edit
        end
    end
    
    def destroy
      local = Local.friendly.find(params[:id])
  
      if local.destroy
        flash[:notice] = "You've Sucessfully Deleted the Local"
        redirect_to sauces_path
      else
        flash.now[:error] = "Unable to Delete Local. Please Try Again."
        render :edit
      end
    end


      private

      def local_params
        params.require(:local).permit(:name, :bio, :address, :city, :state, :zip, :twitter, :facebook, :website)
      end

      def authorize_user
        if !user_signed_in? || !(current_user.role == "admin")
          render json: {error: ["Only admins have access to this feature"]}
        end
      end
    
      def authenticate_user_fetch!
        if !user_signed_in?
          render json: { error: "you must be signed in to submit a local"}, status: 401
        end
      end

  end