class Script < ActiveRecord::Base
  has_and_belongs_to_many :realm
  belongs_to :user

  validates :title, presence: true,
                    length: { minimum: 3 }
  validates :text,  presence: true,
                    length: { minimum: 3 }
end
