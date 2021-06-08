# Rails Validations and Model Specs

### Setup
- $ rails new validations -d postgresql -T
- $ rails db:create

### Adding RSpec Dependencies
- $ bundle add rspec-rails
- $ rails generate rspec:install

### Adding a Model
- $ rails g model Restaurant food_name:string description:text price:integer
- $ rails db:migrate

Adding the RSpec commands before the model will give us a model spec file: `spec/models/restaurant_spec.rb`

### Validations

**Generic Test**  
```ruby
it 'is valid with valid attributes' do
  # Creating a variable with all the attributes
  restaurant = Restaurant.create food_name: 'Cheese Pizza', description: 'Garlic crust and extra cheesy', price: 10
  # Expect to be valid
  expect(restaurant).to be_valid
end
```
$ rspec spec/models/restaurant_spec.rb  
Test passes

**Test for Presence of Columns**  

Food_name:
```ruby
it 'is not valid without a food_name' do
  restaurant = Restaurant.create description: 'Garlic crust and extra cheesy', price: 10
  expect(restaurant.errors[:food_name]).to_not be_empty
end
```
$ rspec spec/models/restaurant_spec.rb  
Test fails

Add validation of the model class:  
`app/models/restaurant.rb`
```ruby
class Restaurant < ApplicationRecord
  validates :food_name, presence: true
end
```
$ rspec spec/models/restaurant_spec.rb   
Test passes


Description
```ruby
it 'is not valid without a description' do
  restaurant = Restaurant.create food_name: 'Cheese Pizza', price: 10
  expect(restaurant.errors[:description]).to_not be_empty
end
```

$ rspec spec/models/restaurant_spec.rb  
Test fails

Adding validation that will cause an error if description is empty  
`app/models/restaurant.rb`
```ruby
class Restaurant < ApplicationRecord
  validates :food_name, :description, presence: true
end
```

$ rspec spec/models/restaurant_spec.rb   
Test passes


**Test for Length**
```ruby
it 'is not valid if description is less than 10 characters' do
  restaurant = Restaurant.create food_name: 'Cheese Pizza', description: 'Cheese', price: 10
  expect(restaurant.errors[:description]).to_not be_empty
end
```
$ rspec spec/models/restaurant_spec.rb  
Test fails

Adds a validation for length:  
`app/models/restaurant.rb`
```ruby
class Restaurant < ApplicationRecord
  validates :food_name, :description, presence: true
  validates :description, length: { minimum: 10 }
end
```

$ rspec spec/models/restaurant_spec.rb   
Test passes


**Validates Uniqueness**  
Creating two instances with the same name.
```ruby
it 'is not valid if the food name is duplicated' do
  Restaurant.create food_name: 'Cheese Pizza', description: 'Garlic crust and extra cheesy', price: 10
  restaurant = Restaurant.create food_name: 'Cheese Pizza', description: 'Garlic crust and extra cheesy', price: 10
  expect(restaurant.errors[:food_name]).to_not be_empty
end
```

$ rspec spec/models/restaurant_spec.rb  
Test fails


Adds a validation for length:  
`app/models/restaurant.rb`
```ruby
class Restaurant < ApplicationRecord
  validates :food_name, :description, presence: true
  validates :description, length: { minimum: 10 }
end
```

$ rspec spec/models/restaurant_spec.rb   
Test passes
