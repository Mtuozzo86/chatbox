Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  mount ActionCable.server => "/cable"
  resources :users, only: [:index, :create, :show]
  
  # After logging in and creating rooms, each room can invite others to join, invited users see that room added to their list
  post '/users/:contact', to: 'users#addcontact'
  
  resources :conversations, only: [:index, :show, :create, :addcontact] do
    resources :chat_messages, only: [:index, :create]
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "sessions#show"
end
