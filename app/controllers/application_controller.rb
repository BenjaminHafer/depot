class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  protect_from_forgery unless: -> {request.format.json?}

  include CurrentCart
  helper_method :current_cart
  before_action :set_cart, only: [:create]


  private

  before_filter :initialize_session

  def initialize_session
    # Called before any controller method
    session[:store_index_count] ||= 0
  end


  end


