class Script < ActiveRecord::Base
  validates :title, presence: true,
                    length: { minimum: 3 }
  validates :text,  presence: true,
                    length: { minimum: 3 }
end
