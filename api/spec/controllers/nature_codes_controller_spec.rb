require "rails_helper"

RSpec.describe NatureCodesController, type: :request do
  let!(:nature_codes) { create_list(:nature_code, 3) }

  describe "#index" do
    it "returns nature codes" do
      get nature_codes_path

      response_nature_codes = JSON.parse(response.body)

      expect(response_nature_codes.count).to eq(nature_codes.count)
      response_nature_codes.each do |nature_code_json|
        expect(NatureCode.find(nature_code_json["id"])).to be_truthy
      end
    end
  end
end