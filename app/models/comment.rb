class Comment < ApplicationRecord
    validates :body, presence: true
    belongs_to :local
    belongs_to :user
    
end 