require 'test_helper'

class ScriptsControllerTest < ActionController::TestCase

  test "should show scripts index" do
    sign_in User.first
    get :index
    assert_response :success
    assert_not_nil assigns(:scripts)
  end

  test "should show a script" do
    sign_in User.first
    get :show, {user_nickname: 'amonks', title: 'testscript' }
    assert_response :success
    assert_not_nil assigns(:user)
    assert_not_nil assigns(:script)
  end

  test "should show new script" do
    sign_in User.first
    get :new, {user_nickname: 'amonks'}
    assert_response :success
    assert_not_nil assigns(:script)
  end

  test "should show the form to edit a script" do
    sign_in User.first
    get :edit, {user_nickname: 'amonks', title: 'testscript'}
    assert_response :success
    assert_not_nil assigns(:user)
    assert_not_nil assigns(:script)
  end

  # test create
  test "should create a new script" do
    sign_in User.first
    assert_difference('Script.count') do
      post :create, { user_nickname: 'amonks', script: {title: "newscript", text: "new script", readme: "new script readme"} }
    end
    assert_redirected_to dashboard_path
  end

  # test update
  test "should update a script" do
    sign_in User.first
    put :update, { user_nickname: 'amonks', title: 'testscript', script: {title: "newly_renamed_testscript"} }
    assert_redirected_to dashboard_path
    assert_equal "newly_renamed_testscript", Script.find(1).title
  end

  test "should show the form to realmify a script" do
    sign_in User.first
    get :realmify, { user_nickname: 'amonks', title: 'testscript' }
    assert_response :success
    assert_not_nil assigns(:user)
    assert_not_nil assigns(:script)
    assert_not_nil assigns(:realm)
  end

  # test destroy
  test "should destroy a script" do
    sign_in User.first
    assert_difference('Script.count', -1) do
      delete :destroy, { user_nickname: 'amonks', title: 'testscript' }
    end
    assert_redirected_to dashboard_path
  end

end
