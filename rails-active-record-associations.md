# Rails Active Record Associations

$ rails new associations -d postgresql -T

Error: FATAL: database "associations_development" does not exist
- This means a db was not created - must run $ rails db:create


Create a model:
- $rails g model Cupcake name:string price:string
- $ rails db:migrate


- Model name must be singular
- destroy command to undo generate commands

Create a second table:
Foreign key: cupcake_id:integer, always on the belongs_to side

$ rails g model Ingredient name:string measurement:string cupcake_id:integer


Define a relationship in the model classes:

app/models/cupcake.rb:
class Cupcake < ApplicationRecord
  has_many :ingredients
end
NOTE: ingredients is plural


app/models/ingredient.rb
class Ingredient < ApplicationRecord
  belongs_to :cupcake
end
NOTE: cupcake is singular


Add data to the db:
- $ rails c
- Cupcake.create name: 'Chocolate', price: '$3'
- Cupcake.create name: 'Confetti', price: '$2.5'
- Cupcake.create name: 'Red Velvet', price: '$3.5'
- rv = Cupcake.find 3

Cupcake.where(name: 'Red Velvet').first

rv.ingredients.create name: 'cocoa powder', measurement: '
2 cups'
rv.ingredients.create name: 'buttermilk', measurement: '1 cup'
rv.ingredients.create name: 'vinegar', measurement: '1 cup'

rv.ingredients
