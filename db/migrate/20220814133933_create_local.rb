class CreateLocal < ActiveRecord::Migration[5.2]
  def change
    create_table :locals do |t|
      t.string :name, null: false
      t.string :bio, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      
      t.timestamps
    end
  end
end
