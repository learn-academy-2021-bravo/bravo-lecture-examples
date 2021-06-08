class FoodController < ApplicationController
    def nachos
        render "nachos.html.erb"
    end
    def cheese
        @shazeens_favorites = "Sharp Chedder and Swiss"
        render "cheese.html.erb"
    end
    def home
        @intro = "Welcome to the site about peoples favorite foods"
        render 'home.html.erb'
    end
    def burritos
        
        @choices = ["California", "Bean and Cheese", "Grilled Mahi", "Al Pastor", "Carne Asada"]
        render "burritos.html.erb"
    end
   
end
