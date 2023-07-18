class CreateNatureCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :nature_codes do |t|
      t.string :name, null: false
      t.timestamps
    end

    add_reference :chatrooms, :nature_code, foreign_key: true
  end
end
