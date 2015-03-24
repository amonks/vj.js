class RoutesTest < ActionController::TestCase
  test "should route to index" do
    assert_routing '/', {controller: "welcome", action: "index"}
  end

  test "should route to users" do
    assert_routing '/users', {controller: "users", action: "index"}
    flunk
  end
end
