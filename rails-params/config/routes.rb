Rails.application.routes.draw do
  get '/beverage/:type' => 'food#beverage'
  get '/tacos/:num' => 'food#tacos'
  get '/icecream/:flavor/:topping' => 'food#icecream'
end
