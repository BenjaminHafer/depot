class AddSellerToProduct < ActiveRecord::Migration[5.0]
  def change
    add_reference :products, :seller, foreign_key: true
  end
end
