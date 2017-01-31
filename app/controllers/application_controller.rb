class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  before_filter :initialize_session

  def initialize_session
    # Called before any controller method
    session[:store_index_count] ||= 0
  end
end
