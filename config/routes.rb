Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/about-us', to: "homes#index"
  get '/faq', to: "homes#index"
  get '/locals', to: "homes#index"
  get '/locals/new', to: "homes#auth"
  get '/locals/:id', to: "homes#index"
  get '/users/:id', to: "homes#index"


  namespace :api do
    namespace :v1 do 
      resources :questions
    end
  end
  
  namespace :api do
    namespace :v1 do 
      resources :locals
    end
  end

  namespace :api do
    namespace :v1 do 
      resources :users
    end
  end
end
