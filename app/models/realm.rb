class Realm < ActiveRecord::Base
  include Authority::Abilities

  belongs_to :user
  belongs_to :script

  def to_param
    "#{title}"
  end

  def self.path
    "#{self.user.nickname}/#{self.title}"
  end

  validates :title, presence: true,
                    length: { minimum: 3 },
                    uniqueness: { scope: :user }
  validates :script_id, presence: true,
                        length: { minimum: 1 }
end
