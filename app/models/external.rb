class External < ActiveRecord::Base
  belongs_to :realm

  def to_param
    "#{export}"
  end

  validates :export, presence: true,
                     uniqueness: { scope: :realm }
  validates :url,    presence: true,
                     uniqueness: true
end
