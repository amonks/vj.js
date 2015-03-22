class AddRealmToScripts < ActiveRecord::Migration
  def change
    add_reference :scripts, :realm, index: true, foreign_key: true
  end
end
