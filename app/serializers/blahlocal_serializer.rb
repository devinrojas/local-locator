class LocalSerializer < ActiveModel::Serializer
    attributes :name, :bio, :address, :city, :state, :zip, :twitter, :facebook, :website 
    has_many :likes
    has_many :comments
  end