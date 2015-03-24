require 'test_helper'

class ScriptTest < ActiveSupport::TestCase
  test "should not save without title" do
    script = Script.new
    script.text = "console.log('test');"
    assert_not script.save
  end

  test "should not save without text" do
    script = Script.new
    script.title = "brokenscript"
    assert_not script.save
  end
end
