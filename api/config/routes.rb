Rails.application.routes.draw do
  resources :chatrooms, only: [:index, :create, :update]
  resources :nature_codes, only: [:index]
end
