class Local < ActiveRecord::Base
    validates :name, presence: true
    validates :bio, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip, presence: true
    validates :zip, numericality: true
end
