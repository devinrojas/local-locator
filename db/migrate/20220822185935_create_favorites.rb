class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :favorite, null: false, default: 0
      t.belongs_to :local, null: false
      t.belongs_to :user, null: false
      
      t.timestamps
    end
  end
end
