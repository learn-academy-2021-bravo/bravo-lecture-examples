class Orderer
    attr_accessor :shop, :user, :order

    def initialize(shop, user)
        @shop = shop
        @user = user
        @order = "in progress "
    end
    def set_is_canceled
        @order = "canceled"
    end
    
end

class TshirtOrderer < Orderer
    attr_accessor :t_shirt_number, :t_shirt_style
    def initialize(shop, user, number, style)
        super(shop, user)
        @t_shirt_number = number
        @t_shirt_style = style
    end

    def set_is_shipped
        @shipped = true
    end

end

# donut_shirts = TshirtOrderer.new("Donut Media", "Austin", "1", "RIP PopUp&Down Headlights")
# donut_shirts.order = "to arrive in one month"
# p donut_shirts
# donut_shirts.set_is_shipped
# p donut_shirts



class ShoeOrderer < Orderer
    def initialize(shop, user, brand, size)
        super(shop, user)
        @brand = brand
        @size = size
    end


    def set_one_day_shipping 
        @shipping_method = "one day"
    end

end

guillermo = ShoeOrderer.new("Nike", "guillermo", "Jordans", "11")


guillermo.set_one_day_shipping
guillermo.set_is_canceled
p guillermo