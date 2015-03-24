class RenameRealmTitle < ActiveRecord::Migration
  def change
    change_table :realms do |t|
      t.rename :title, :realm_title
    end
  end
end
