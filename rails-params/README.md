# Rails Params

- $ `rails new params -d postgresql -T`
- $ `cd params`
- $ `rails db:create`
- $ `rails g controller Food` - controller, view folder


### Beverage Method
**Step 1)** Hard coding a string
```ruby
def beverage
  @bev_type = 'tea'
end
```
- Rendering a view
- http://localhost:3000/beverage

**Step 2)** Getting info from params
```ruby
def beverage
  @bev_type = params[:type]
end
```
- Passing a query into the url
- http://localhost:3000/beverage?type=whiskey

**Step 3)** Require the params in the routes
```ruby
get '/beverage/:type' => 'food#beverage'
```
- Passing a param rather than a query
- http://localhost:3000/beverage/tea
- Parameters: `{"type"=>"tea"}`
- Param is a hash and the value is a string

### Tacos Query
```ruby
def tacos
  @number = params[:num]
  if @number.to_i >= 10
    @number = 'a boat load of'
  else
    @number
  end
end
```
- Can write Ruby code in the method
- Account for the param being a string

### Ice Cream Method
Passing two params:
```ruby
def icecream
  @flavor = params[:flavor]
  @topping = params[:topping]
end
```
Requiring two params in the route
```
get '/icecream/:flavor/:topping' => 'food#icecream'
```
- Passing in two params to the url
- http://localhost:3000/icecream/chcolate/sprinkles
- Parameters: `{"flavor"=>"chocolate", "topping"=>"sprinkles"}`
