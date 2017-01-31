class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include CurrentCart
  before_action :set_cart, only: [:create]

  helper_method :current_cart
  private

  before_filter :initialize_session

  def initialize_session
    # Called before any controller method
    session[:store_index_count] ||= 0
  end
  def current_cart
    @cart = Cart.find(session[:cart_id])
  end

  end


