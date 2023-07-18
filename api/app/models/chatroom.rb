class Chatroom < ApplicationRecord
  belongs_to :nature_code, optional: true
end