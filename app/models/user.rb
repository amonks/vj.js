class User < ActiveRecord::Base
  has_many :scripts
  has_many :realms

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:github]
  def self.from_omniauth(auth)
    where(provider: auth.provider, nickname: auth.nickname).first_or_create do |user|
      user.provider = auth.provider
      user.nickname = auth.info.nickname
      user.name = auth.info.name
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end
end
