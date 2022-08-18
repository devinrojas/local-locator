class Api::V1::LocalsController < ApiController
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


      private

      def local_params
        params.require(:local).permit(:name, :bio, :address, :city, :state, :zip)
      end

  end