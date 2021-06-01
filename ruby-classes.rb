

class FoodOrder
  attr_accessor :restaurant_name, :sandwhich_order, :drink, :chips, :order_time, :order_due

  def initialize(restaurant_name, sandwhich_order, drink, chips)
            @restaurant_name = restaurant_name
            @sandwhich_order = sandwhich_order
            @drink = drink
            @chips = chips
            @order_time = Time.now
            @order_due = Time.at((Time.now.to_i) + 780)
           
        end

        def print_order_ticket
            puts " An order from #{restaurant_name} for a #{sandwhich_order}, #{drink}, & #{chips} chips. Order placed at #{order_time} and should be ready at #{order_due}"
        end
end



 subway_order = FoodOrder.new("Subway", "No.11", "Sprite", "Plain")


subway_order.print_order_ticket
