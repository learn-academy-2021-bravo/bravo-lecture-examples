# Rails Active Record Associations

### Setup
$ rails new associations -d postgresql -T  
$ rails s

Firing up the app and we see this error:

```
Error: FATAL: database "associations_development" does not exist
```
- This means a db was not created
- $ rails db:create
-

### Create a Model
- $ rails g model Cupcake name:string price:string
- $ rails db:migrate


- Model name must be singular
- destroy command to undo generate commands

### Create a Second Table
- Foreign key: cupcake_id:integer, always on the belongs_to side
- $ rails g model Ingredient name:string measurement:string cupcake_id:integer


### Define a Relationship in the Model Classes

**app/models/cupcake.rb**
```ruby
class Cupcake < ApplicationRecord
  has_many :ingredients
end
```
NOTE: ingredients is plural


**app/models/ingredient.rb**
```ruby
class Ingredient < ApplicationRecord
  belongs_to :cupcake
end
```
NOTE: cupcake is singular


### Add Data to the DB
- $ rails c

```
> Cupcake.create name: 'Chocolate', price: '$3'
> Cupcake.create name: 'Confetti', price: '$2.5'
> Cupcake.create name: 'Red Velvet', price: '$3.5'

// Save as a variable.
> rv = Cupcake.find 3

// Could also find the data like this:
> Cupcake.third
> Cupcake.where(name: 'Red Velvet').first
```

```
rv.ingredients.create name: 'cocoa powder', measurement: '2 cups'
rv.ingredients.create name: 'buttermilk', measurement: '1 cup'
rv.ingredients.create name: 'vinegar', measurement: '1 cup'

// look at all the ingredients associated with this cupcake
rv.ingredients
```
