class Game < ActiveRecord::Base
    has_many(:inventories)
    has_many(:locals, through: :inventories)
  end