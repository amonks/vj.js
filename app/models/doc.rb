class Doc < ActiveRecord::Base
  def to_param
    "#{number}-#{title}"
  end

  validates :title,  presence: true,
                     uniqueness: true
  validates :number, presence: true,
                     uniqueness: true
  validates :text,   presence: true
end
