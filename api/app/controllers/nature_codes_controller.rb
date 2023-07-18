class NatureCodesController < ApplicationController
  def index
    nature_codes = NatureCode.all

    render json: nature_codes
  end
end