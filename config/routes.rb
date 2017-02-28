Rails.application.routes.draw do
  namespace :admin do
    resources :accounts
    resources :super_accounts
resources :buyers
resources :carts
resources :line_items
resources :orders
resources :products
resources :sellers

    root to: "accounts#index"
  end

  devise_for :accounts,  :controllers => { :registrations => 'registrations' }
  resources :orders

  resources :buyers, only: [:edit, :update]
  resources :sellers, only: [:edit, :update]


  get 'hello_world', to: 'hello_world#index'
  get 'search', to: 'store#search'

  resources :line_items do
       patch 'decrement', on: :member
  end
  resources :carts
  root 'store#index', as: 'store_index'


  resources :products

  resources :sellers do
    resources :products

    member do
      get 'orders', to: 'line_items#show_orders_for_seller'
    end
  end

  resources :buyers do
    resources :orders
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
