class ChatroomsController < ApplicationController
  def index
    resolved = params[:resolved] || false
    chatrooms = Chatroom.includes(:nature_code).where(resolved:).order(created_at: :desc)

    render json: chatrooms, include: ['nature_code']
  end

  def create
    chatroom = Chatroom.create!(
      label: params[:label],
      caller_phone_number: params[:caller_phone_number],
      description: params[:description],
      nature_code_id: params[:nature_code_id],
      resolved: false
    )

    render json: chatroom, include: ['nature_code']
  rescue StandardError => exception
    render json: { error: exception.message }, status: :bad_request
  end

  def update
    chatroom = Chatroom.find_by(params[:id])
    chatroom.update!(description: params[:description])

    render json: chatroom, include: ['nature_code']
  rescue StandardError => exception
    render json: { error: exception.message }, status: :bad_request
  end
end