Rails.application.routes.draw do
  root to: 'pages#home'
  resources :restaurants, only: [:show, :index, :destroy] do
    resources :reviews, only: :create
  end
end
