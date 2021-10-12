Rails.application.routes.draw do
  namespace :api do
    namespace :v1, format: :json do
      resources :todos
    end
  end
end