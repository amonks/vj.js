class ContentAuthorizer < ApplicationAuthorizer
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
    user.id == resource.user.id || user.admin?
  end
end
