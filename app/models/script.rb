class Script < ActiveRecord::Base
  include Authority::Abilities

  has_many :externals
  has_many :realms
  belongs_to :user

  def to_param
    "#{title}"
  end

  def path
    "#{user.nickname}/#{title}"
  end

  validates :title, presence: true,
                    uniqueness: { scope: :user },
                    length: { minimum: 3 }
  validates :text,  presence: true,
                    length: { minimum: 3 }
  validates :readme, presence: true
end
