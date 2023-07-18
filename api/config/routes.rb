Rails.application.routes.draw do
  resources :chatrooms, only: [:index, :create]
  resources :nature_codes, only: [:index]
end
