class Api::V1::VotesController < ApiController
	before_action :authenticate_user

  def create
	already_favorite = Favorite.find_by(user_id: current_user.id, local_id: params['local_id'])
    
    if already_favorite
      local = Local.find(params['local_id'])
      change_already_favorite(already_favorite, local)
    else
      new_favorite
    end
  end

	private

	def authenticate_user
    if !user_signed_in?
      render json: {error: ["You must be signed in to vote on locals!"]}
    end
  end

  def favorite_params
    params.require(:favorite).permit(:favorite, :local_id)
  end

  def change_already_favorite(already_favorite, local)
    if already_favorite.favorite === params['favorite']
      already_favorite.destroy

      favoeites = local.total_favorites
      favorite = { favorite: nil }
      payload = { favorite: favorite, favorites: favorites }

      render json: payload
    else
      already_favorite.update(favorite: params['favorite'])

      favorites = local.total_favorites
      payload = { favorite: already_favorite, favorites: favorites}

      render json: payload
    end
  end

  def new_favorite 
    favorite_hsah = favorite_params.merge!({user_id: current_user.id})
    favorite = Favorite.new(favorite_hash)

    if favorite.save
      local = local.find(favorite.local_id)
      favorites = local.total_favorites
      payload = { favorite: favorite, favorites: favorites }

      render json: payload
    else
      render json: {error: "An error occurred."}
    end
  end
end