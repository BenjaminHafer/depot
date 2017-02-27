class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  belongs_to :accountable, polymorphic: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ACCOUNT_TYPES=["Buyer", "Seller"]
  attr_accessor :type
end
