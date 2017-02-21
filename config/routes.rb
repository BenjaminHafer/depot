Rails.application.routes.draw do
  resources :orders

  get 'hello_world', to: 'hello_world#index'
  get 'search', to: 'store#search'

  resources :line_items do
       patch 'decrement', on: :member
  end
  resources :carts
  root 'store#index', as: 'store_index'


  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
