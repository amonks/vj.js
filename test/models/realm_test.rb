require 'test_helper'

class RealmTest < ActiveSupport::TestCase
  test "should not save without a title" do
    realm = Realm.new script_id: 1
    assert_not realm.save
  end

  test "should not save without a script_id" do
    realm = Realm.new title: "no_title_realm"
    assert_not realm.save
  end

  test "should not save without a real script" do
    flunk "I haven't made this test yet"
  end
end
