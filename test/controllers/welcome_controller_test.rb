require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should redirect to dashboard if logged in" do
    sign_in User.first
    get :index
    assert_redirected_to dashboard_path
  end

  test "should show index if not logged in" do
    get :index
    assert_response :success
  end
end
