require 'test_helper'

class RealmsControllerTest < ActionController::TestCase

  test "should show the realm index" do
    sign_in User.first
    get :index
    assert_response :success
    assert_not_nil assigns(:realms)
  end

  test "should show edit realm form" do
    sign_in User.first
    get :edit, {user_nickname: 'amonks', title: 'realmOne'}
    assert_response :success
    assert_not_nil assigns(:user)
    assert_not_nil assigns(:realm)
  end

  # test create
  test "should create a new realm" do
    sign_in User.first
    assert_difference('Realm.count') do
      post :create, {user_nickname: 'amonks', realm: {title: "newrealm", description: "cool new realm", script_id: 1}}
    end
    assert_redirected_to dashboard_path
  end

  # test update
  test "should update a realm" do
    sign_in User.first
    put :update, { user_nickname: 'amonks', title: "realmOne", realm: {title: 'realm_one_newly_renamed'} }
    assert_redirected_to dashboard_path
    assert_equal "realm_one_newly_renamed", Realm.find(1).title
  end

  # test destroy
  test "should destroy a realm" do
    sign_in User.first
    assert_difference('Realm.count', -1) do
      delete :destroy, { user_nickname: 'amonks', title: 'realmOne' }
    end
    assert_redirected_to dashboard_path
  end

end
