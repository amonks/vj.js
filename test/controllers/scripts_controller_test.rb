require 'test_helper'

class ScriptsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should show index" do
    sign_in User.first
    get :index
    assert_response :success
    assert_not_nil assigns(:scripts)
  end

  test "should show new" do
    sign_in User.first
    get :new
    assert_response :success
    assert_not_nil assigns(:script)
  end

  test "should show edit" do
    sign_in User.first
    get :edit, {user_nickname: 'amonks', script_title: 'testscript'}
    assert_response :success
    assert_not_nil assigns(:user)
    assert_not_nil assigns(:script)
  end

  # test create
  test "should create a new script" do
    sign_in User.first
    assert_difference('Script.count') do
      post :create, script: {title: "newscript", text: "new script"}
    end
    assert_redirected_to script_path(assigns(:script))
  end

  # test update
  test "should update a script" do
    sign_in User.first
    put :update, id: 1, script: {title: "newname"}
    assert_redirected_to script_path(assigns(:script))
    assert_equal "newname", Script.find(1).title
  end

  # test destroy
  test "should destroy a script" do
    sign_in User.first
    assert_difference('Script.count', -1) do
      delete :destroy, id: 1
    end
    assert_redirected_to scripts_path
  end

end
