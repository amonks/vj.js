require 'test_helper'

class DocsControllerTest < ActionController::TestCase
  test "should show the docs index" do
    sign_in User.first
    get :index
    assert_response :success
    assert_not_nil assigns(:docs)
  end

  test "should show a doc" do
    sign_in User.first
    get :show, { title: 'intro' }
    assert_response :success
    assert_not_nil assigns(:doc)
  end
end
