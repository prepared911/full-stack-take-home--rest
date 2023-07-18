class CreateChatrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :chatrooms do |t|
      t.string :label, null: false
      t.string :caller_phone_number, null: false
      t.string :description, null: true
      t.boolean :resolved, null: false, default_value: false
      t.timestamps
    end
  end
end
