class AdminAuthorizer < ApplicationAuthorizer
  # def self.modifiable_by?(user)
  #   true
  # end
  # def self.viewable_by?(user)
  #   true
  # end

  def viewable_by?(user)
    true
  end

  def modifiable_by?(user)
    user.admin?
  end
end
