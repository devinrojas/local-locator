class Inventory < ActiveRecord::Base
    belongs_to(:local)
    belongs_to(:game)
  end