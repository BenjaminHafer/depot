class StoreController < ApplicationController
  def index
    @products = Product.order(popularity: :desc)
    @count = increment_count
    @time = Time.now
    @shown_message = "you've been here #{@count} times" if session[:counter] >5
    respond_to do |format|
      format.html {
        if (params[:spa] && params[:spa] == "true")
          redirect_to hello_world_url
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
  end
  helper_method :current_cart
end
