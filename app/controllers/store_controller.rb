class StoreController < ApplicationController
  def index
    @products = Product.order(:title)
    @count = increment_count
    @time = Time.now
    @shown_message = "you've been here #{@count} times" if session[:counter] >5
  end
  def increment_count
    if session[:counter].nil?
      session[:counter] = 0
    end
    session[:counter] += 1
  end
end
