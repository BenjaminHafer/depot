class StoreController < ApplicationController
  def index
    @products = Product.order(popularity: :desc)
    @count = increment_count
    @time = Time.now
    @shown_message = "you've been here #{@count} times" if session[:counter] >5
    respond_to do |format|
      format.html {
        if (params[:spa] && params[:spa] == "true")
          render 'index_spa'
          # the else case below is by default
          # else
          #    render 'index'
        end
      }
      format.json {render json: @products}
    end
  end
  def increment_count
    if session[:counter].nil?
      session[:counter] = 0
    end
    session[:counter] += 1
  end
  def current_cart
    @cart = Cart.find(session[:cart_id])
  rescue ActiveRecord::RecordNotFound
    @cart = Cart.create
    session[:cart_id] = @cart.id
  end
  helper_method :current_cart
end
