Rails.application.routes.draw do
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  mount ActionCable.server => "/cable"
  resources :users, only: [:index, :create, :show]
  
  
  resources :conversations, only: [:index, :show] do
    resources :chat_messages, only: [:index, :create]
  end
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "sessions#show"
end
