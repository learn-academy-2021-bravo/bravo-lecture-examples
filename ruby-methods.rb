# Ruby Methods 5/25/2021

# Difference between a function and a method?
# Build in method - syntatical sugar
# Method is a function that belongs a class

# Custom methods


# def - define

# Outermost layer
def greeter
end

# Implicit return - Ruby will return the last line of every method unless otherwise noted
def greeter
  'Hello World!'
end

# Using the keyword return (same result at the previous example)
def greeter
  return 'Hello World!'
end
p greeter


def greeter name
  "Hello, #{name}!"
end

# def - define the method
# greeter - name of the method
# name - parameter
# implicit return to return a string using string interpolation
# end - ends the scope of the method

p greeter 'Joe'
# => "Hello, Joe!"
p greeter 'George'
# => "Hello, George!"
p greeter 'Bob'
# => "Hello, Bob!"

# Function with mulitple parameters
# Good practice to wrap multiple parameters in parentheses
def multiplier(num1, num2)
  num1 * num2
end
p multiplier 4, 5
p multiplier 8, 9
p multiplier 2, 4


# Function with multiple parameters and a conditional statement
def greater_than(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    'The numbers are the same'
  end
end

p greater_than 20, 22
# => "22 is greater"
p greater_than 6, 27
# => "27 is greater"
p greater_than 42, 42
# => "The numbers are the same"

# Getting the user input from the terminal
p 'Enter your name:'
user_name = gets.chomp
p user_name

p 'Enter your age:'
user_age = gets.chomp.to_i
p user_age.class


def can_you_vote(name, age)
  if age >= 18
    "Hi, #{name}. #{age} is old enough to vote."
  else
    "Hi, #{name}. Sorry, #{age} is not old enough."
  end
end

p can_you_vote(user_name, user_age)

# VERY common error:
# syntax error, unexpected end-of-input, expecting `end'
