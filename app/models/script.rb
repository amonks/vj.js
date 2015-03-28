class Script < ActiveRecord::Base
  has_many :realms
  belongs_to :user

  def to_param
    "#{title}"
  end

  validates :title, presence: true,
                    uniqueness: { scope: :user },
                    length: { minimum: 3 }
  validates :text,  presence: true,
                    length: { minimum: 3 }
  validates :readme, presence: true
end
