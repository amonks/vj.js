class AddReadmeToScripts < ActiveRecord::Migration
  def change
    add_column :scripts, :readme, :text
  end
end
