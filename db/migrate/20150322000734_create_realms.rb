class CreateRealms < ActiveRecord::Migration
  def change
    create_table :realms do |t|
      t.string :title
      t.references :user, index: true, foreign_key: true
      t.text :description

      t.timestamps null: false
    end
  end
end
