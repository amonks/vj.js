class External < ActiveRecord::Base
  include Authority::Abilities
  belongs_to :script

  def to_param
    "#{export}"
  end

  def path
    script.path
  end

  validates :export, presence: true,
                     uniqueness: { scope: :realm }
  validates :url,    presence: true,
                     uniqueness: true
end
