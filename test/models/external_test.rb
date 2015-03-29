require 'test_helper'

class ExternalTest < ActiveSupport::TestCase
  test "should not save an external without an export" do
    external = External.new script_id: 1
    assert_not external.save
  end

  test "should not save an external without a script_id" do
    external = External.new export: "what"
    assert_not external.save
  end
end
