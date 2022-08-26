class UserSerializer < ActiveModel::Serializer
    attributes :id, :created_at, :username, :email, :avatar, :bio, :twitter, :facebook, :website, :role

    has_many :locals, through: :likes
  end