class CommentSerializer < ActiveModel::Serializer
    attributes :id, :body, :local_id, :country, :created_at, :user_id, :current_user
    
    belongs_to :local
    belongs_to :user
  end