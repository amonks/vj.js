require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should show index" do
    sign_in User.first
    get :index
    assert_response :success
    assert_not_nil assigns(:users)
  end

  test "should show user" do
    sign_in User.first
    get :show, {nickname: 'mo'}
    assert_response :success
    assert_not_nil assigns(:user)
    assert_not_nil assigns(:scripts)
    assert_not_nil assigns(:realms)
  end

  test "should show me" do
    sign_in User.first
    get :me
    assert_response :success
  end

end
