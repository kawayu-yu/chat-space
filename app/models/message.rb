class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  balidates :body, prexence: true, unless: :image?
end