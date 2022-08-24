class CreateInventory < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.belongs_to :local, null: false
      t.belongs_to :game, null: false
    end
  end
end
