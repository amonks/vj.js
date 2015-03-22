class Realm < ActiveRecord::Base
  has_many :scripts
  belongs_to :user

  validates :title, presence: true,
                    length: { minimum: 3 }
  validates :description, presence: true,
                          length: { minimum: 3 }
end
