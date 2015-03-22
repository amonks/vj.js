class Script < ActiveRecord::Base
  has_many :realms
  belongs_to :user

  validates :title, presence: true,
                    length: { minimum: 3 }
  validates :text,  presence: true,
                    length: { minimum: 3 }
end
