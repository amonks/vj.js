class AddScriptRealmAssociation < ActiveRecord::Migration
  def change
    create_table :realms_scripts, id: false do |t|
      t.belongs_to :realm, index: true
      t.belongs_to :script, index: true
    end
  end
end
