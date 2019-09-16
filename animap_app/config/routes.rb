Rails.application.routes.draw do
  resources :sessions
  resources :registrations, only: [:create, :show]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :comments
  resources :regions
  resources :animals
  resources :users
 root to: "static#home"
end
