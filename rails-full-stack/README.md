# Full Stack Rails


RESTful Routes (7)

Specifically named controller methods
Three actions that need to be done with every route - 1) controller method, 2) route, 3) view

**READ**

### Index
1) Controller method
```ruby
def index
@herbs = Herb.all
end
```
2) Route
```
get '/herbs' => 'herb#index'
```
3) View
```
app/views/herb/index.html.erb
```

### Show
1) Controller method
``` ruby
def show
  @herb = Herb.find(params[:id])
end
```
2) Route
```
get '/herbs/:id' => 'herb#show', as: 'herb'
```
3) View
```
app/views/herb/show.html.erb
```

**CREATE**
### New
1) Controller method
```ruby
def new
  @herb = Herb.new
end
```
2) Route
```
get '/herbs/new' => 'herb#new', as: 'new_herb'
```
3) View
```
new.html.erb
```

### Create
1) Controller method
```ruby
def create
  @herb = Herb.create(herb_params)
  if @herb.valid?
    redirect_to herbs_path
  else
    redirect_to new_herb_path
  end
end

# Strong param
private
# Anything below the private method can only be called inside the class
def herb_params
  params.require(:herb).permit(:name, :is_watered)
end
```
2) Route
```
post '/herbs' => 'herb#create'
```
3) View  
NO VIEW!

**UPDATE**
### Edit
1) Controller method
2) Route
3) View

### Update
1) Controller method
2) Route
3) View

**Delete**
### Destroy
1) Controller method
2) Route
3) View
