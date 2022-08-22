class UserSerializer < ActiveModel::Serializer
    attributes :id, :current_user, :username, :created_at

  end