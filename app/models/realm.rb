class Realm < ActiveRecord::Base
  belongs_to :user
  belongs_to :script

  validates :realm_title, presence: true,
                    length: { minimum: 3 }
  validates :script_id, presence: true,
                        length: { minimum: 1 }
end
