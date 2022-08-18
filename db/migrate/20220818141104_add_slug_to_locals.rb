class AddSlugToLocals < ActiveRecord::Migration[5.2]
  def change
    add_column :locals, :slug, :string
    add_index :locals, :slug, unique: true
  end
end
