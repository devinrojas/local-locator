class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, default: ""
      t.belongs_to :local, null: false
      t.timestamps null: false
    end
  end
end
