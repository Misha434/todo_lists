Rails.application.routes.draw do
  namespace :api do
    namespace :v1, format: :json do
      delete 'todos/destroy_all', to:'todos#destroy_all'
      resources :todos, only: %i[index show create update destroy]
    end
  end
end
