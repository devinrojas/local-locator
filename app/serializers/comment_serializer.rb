class CommentSerializer < ActiveModel::Serializer
    attributes :id, :body, :local_id, :created_at, :user_id
    
    belongs_to :local
    belongs_to :user
    has_many :comments
  end