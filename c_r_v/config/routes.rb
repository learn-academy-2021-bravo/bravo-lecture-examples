Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/nachos' => 'food#nachos'
  get '/cheese' => 'food#cheese'
  get '/home' => 'food#home'
  get '/burritos' => 'food#burritos'

  root to: 'food#home'
end
