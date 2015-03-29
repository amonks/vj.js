class CreateDocs < ActiveRecord::Migration
  def change
    create_table :docs do |t|
      t.string :title, null: false, default: ""
      t.string :number, null: false, default: ""
      t.text :text, null: false

      t.timestamps null: false
    end
    add_index :docs, :title, unique: true
    add_index :docs, :number, unique: true
  end
end
