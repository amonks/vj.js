class User < ActiveRecord::Base
  include Gravtastic
  gravtastic

  has_many :scripts
  has_many :realms

  def to_param
    "#{nickname}"
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:github]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.nickname = auth.info.nickname
      user.name = auth.info.name
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end

  validates :nickname, presence: true,
                       uniqueness: true,
                       length: { minimum: 3 }
  validates :email, presence: true,
                    uniqueness: true

end
