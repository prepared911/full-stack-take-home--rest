require "rails_helper"

RSpec.describe ChatroomsController, type: :request do
  describe "#index" do
    let!(:chatrooms) { create_list(:chatroom, 3) }
    let!(:resolved_chatrooms) { create_list(:chatroom, 3, resolved: true) }
    let(:params) { {} }

    context "when no params are provided" do
      it "returns unresolved chatrooms" do
        get chatrooms_path, params: params
  
        response_chatrooms = JSON.parse(response.body)
  
        expect(response_chatrooms.count).to eq(chatrooms.count)
        response_chatrooms.each do |chatroom_json|
          expect(Chatroom.find(chatroom_json["id"])).to be_truthy
        end
      end
    end

    context "when resolved param is true" do
      let(:params) { { resolved: true } }

      it "returns resolved chatrooms" do
        get chatrooms_path, params: params
  
        response_chatrooms = JSON.parse(response.body)
  
        expect(response_chatrooms.count).to eq(resolved_chatrooms.count)
        response_chatrooms.each do |chatroom_json|
          expect(Chatroom.find(chatroom_json["id"])).to be_truthy
          expect(Chatroom.find(chatroom_json["id"]).resolved).to eq(true)
        end
      end
    end
  end

  describe "#create" do
    let(:nature_code) { create(:nature_code) }
    let(:label) { "Test chatroom label" }
    let(:description) { "Test chatroom description" }
    let(:caller_phone_number) { "12223334444" }
    let(:nature_code_id) { nature_code.id }
    let(:params) do
      {
        label:,
        description:,
        caller_phone_number:,
        nature_code_id:
      }
    end
    
    context "when valid params are provided" do
      it "returns new chatroom" do
        expect { post chatrooms_path, params: params }.to change { Chatroom.count }.from(0).to(1)

        response_chatroom = JSON.parse(response.body)

        expect(Chatroom.find(response_chatroom["id"])).to be_truthy
      end
    end

    context "when required params are missing" do
      let(:label) { nil }
      let(:caller_phone_number) { nil }

      it "returns an error" do
        expect { post chatrooms_path, params: params }.not_to change { Chatroom.count }

        response_error = JSON.parse(response.body)

        expect(response_error["error"]).to be_a(String)
      end
    end
  end

  describe "#update" do
    let(:newChatroom) { create(:chatroom, resolved: false, description: 'Chatroom description') }
    let(:newChatroom2) { create(:chatroom) }
    
    context "when valid params are provided" do
      let(:id) { newChatroom.id }
      let(:params) { { description: "new description" } }
      let(:id2) { newChatroom2.id }
      let(:params2) { { description: "new description2" } }
      it "updates and returns the chatroom" do
        # update newChatroom
        patch chatroom_path(id), params: params
        response_chatroom = JSON.parse(response.body)

        chatroom = Chatroom.find(id)
        expect(chatroom.description).to eq("new description")
  
        expect(response_chatroom["description"]).to eq("new description")

        # update newChatroom2
        patch chatroom_path(id2), params: params2
        response_chatroom2 = JSON.parse(response.body)

        chatroom2 = Chatroom.find(id2)
        expect(chatroom2.description).to eq("new description2")
  
        expect(response_chatroom2["description"]).to eq("new description2")
      end
    end

    context "when only one field is supplied" do
      let(:id) { newChatroom.id }
      let(:params) { { resolved: true } }
      it "only updates one field" do
        # update newChatroom
        patch chatroom_path(id), params: params
        response_chatroom = JSON.parse(response.body)

        chatroom = Chatroom.find(id)
        expect(chatroom.description).to eq("Chatroom description")
        expect(chatroom.resolved).to eq(true)
  
        expect(response_chatroom["description"]).to eq("Chatroom description")
        expect(response_chatroom["resolved"]).to eq(true)
      end
    end
  end
end