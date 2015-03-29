class Doc < ActiveRecord::Base
  include Authority::Abilities

  def to_param
    "#{title}"
  end

  def self.path
    "docs/#{title}"
  end

  validates :title,  presence: true,
                     uniqueness: true
  validates :number, presence: true,
                     uniqueness: true
  validates :text,   presence: true
end
