## create the app
 $ rails new c_r_v -d postgresql -T -G --skip-git
____________________________
## create the DB
$ rails db:create
____________________________
MutliPage App need a controller
## Rails Controller
$ rails g controller Food
____________________________
food_controller.rb
## controller method
 - def nachos
        render html: 'Austins favorite food is nachos'
    end
____________________________
config/routes.rb
### http verbs & =>
get '/nachos' => 'food#nachos'
____________________________
config/routes.rb

## how to make a Landing Page page


root to: 'food#home'
____________________________
app/views/name_of_controller/name_of_method
## create file method_name.html.erb
nachos.html.erb
____________________________
## refactored controller methods
food_controller.rb

    def nachos
        @ingredents = "Chips, Cheese, Beans, Rotel, Avocado"
        render 'nachos.html.erb'
    end
    def burritos
        @choices = ["California", "Bean and Cheese", "Grilled Mahi", "Al Pastor", "Carne Asada"]
        render 'burritos.html.erb'
    end
____________________________
app/views/name_of_controller/name_of_method
## ERB

<%= @any_ruby_can_go_in_these_tags %>
____________________________
## Links Home

app/views/name_of_controller/name_of_method

<%= link_to "home", "/"%>
____________________________
app/views/name_of_controller/name_of_method
## Links to pages
<%= link_to "nachos", "/nachos"%>
<%= link_to "cheese", "/cheese"%>
<%= link_to "burritos", "/burritos"%>


____________________________
### itteration example
burritos.erb/html
<h1> I got you some burritos. WHich one would you like </h1>
<ul>  
    <% @choices.each do |value|%>
        <li> <%= value %></li>
    <% end %>
</ul>