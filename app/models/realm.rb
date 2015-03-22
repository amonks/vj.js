class Realm < ActiveRecord::Base
  has_and_belongs_to_many :scripts
  belongs_to :user
  belongs_to :script

  validates :title, presence: true,
                    length: { minimum: 3 }
end
