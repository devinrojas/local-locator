class AddSocialsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :string
    add_column :users, :twitter, :string
    add_column :users, :facebook, :string
    add_column :users, :website, :string
  end
end
