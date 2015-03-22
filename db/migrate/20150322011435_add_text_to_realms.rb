class AddTextToRealms < ActiveRecord::Migration
  def change
    add_column :realms, :text, :text
  end
end
