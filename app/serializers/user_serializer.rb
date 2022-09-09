class UserSerializer < ActiveModel::Serializer
    attributes :avatar, :bio, :created_at, :email, :facebook, :role, :twitter, :username, :website, :slug

    has_many :locals, through: :likes
  end