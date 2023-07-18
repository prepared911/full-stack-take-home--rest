FactoryBot.define do
  factory :nature_code do
    sequence(:id)
    name { "Incident Kind Name" }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
