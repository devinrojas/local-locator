class Favorite < ApplicationRecord
    validates :favorite, presence: true, numericality: { in: 0..1 }    
    belongs_to :local
    belongs_to :user
  end
