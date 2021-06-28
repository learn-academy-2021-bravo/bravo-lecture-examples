class FoodController < ApplicationController
  def beverage
    @bev_type = params[:type]
  end

  def tacos
    @number = params[:num]
    if @number.to_i >= 10
      @number = 'a boat load of'
    else
      @number
    end
  end

  def icecream
    @flavor = params[:flavor]
    @topping = params[:topping]
  end

end
