class Like < ApplicationRecord
  validates :user, uniqueness: {scope: :local_id}
  belongs_to :user
  belongs_to :local
end
