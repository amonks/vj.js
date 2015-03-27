class CreateExternals < ActiveRecord::Migration
  def change
    create_table :externals do |t|
      t.string :export
      t.string :url
      t.boolean :needs_shim
      t.text :deps
      t.integer :realm_id

      t.timestamps null: false
    end
  end
end
