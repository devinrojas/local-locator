class Local < ActiveRecord::Base
    validates :name, presence: true
    validates :bio, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip, presence: true
    validates :zip, numericality: true
    has_many :likes
    has_many :comments

    extend FriendlyId
    friendly_id :name_slug, use: :slugged

    def name_slug
          [:name]
    end

end
