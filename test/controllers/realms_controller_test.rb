require 'test_helper'

class RealmsControllerTest < ActionController::TestCase

  test "should show index" do
    sign_in User.first
    get :index
    assert_response :success
    assert_not_nil assigns(:realms)
  end

  test "should show new" do
    sign_in User.first
    get :new
    assert_response :success
    assert_not_nil assigns(:realm)
  end

  test "should show edit" do
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
      post :create, realm: {title: "newrealm", description: "cool new realm", script_id: 1}
    end
    assert_redirected_to realm_path(assigns(:realm))
  end

  # test update
  test "should update a realm" do
    sign_in User.first
    put :update, id: 1, realm: {title: "newname"}
    assert_redirected_to realm_path(assigns(:realm))
    assert_equal "newname", Realm.find(1).title
  end

  # test destroy
  test "should destroy a realm" do
    sign_in User.first
    assert_difference('Realm.count', -1) do
      delete :destroy, id: 1
    end
    assert_redirected_to realms_path
  end

end
