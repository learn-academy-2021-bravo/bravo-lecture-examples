# Ruby Blocks 5/25/2021

# Block - anonymous function that is passed to a method, have their own scope

# Blocks can be defined - do/end or {}

# Blocks - often used as iterators



# Times - very simple iterator, does a thing a particular number of times

# 5.times do
#   p 'hello'
# end

# Another way to write the same code as above
# 5.times {p 'hello'}

# Creates the numbers 1-10
# num = 1
# 10.times do
#   p num
#   num += 1
# end

# Each

nums = [2, 3, 4, 5]
# nums.each do
#   p 'yo'
# end

# nums.each do |value|
#   p value * 3
# end


# Ranges

# range = 1..10
range = 'a'..'z'
# Creates an inclusive range, the numbers 1 and everything upto and including 5
# range.each do |value|
#   p value
# end

# nums = Array(1..10)
# p nums

letters = Array('a'..'d')
# p letters

# Map acts on anything that is enumerable and returns an array
# uppercase = letters.map do |value|
#   value.upcase
# end
# p uppercase

# def uppercaser array
#   array.map do |value|
#     value.upcase
#   end
# end
#
# p uppercaser letters
# p uppercaser 'r'..'v'
# p uppercaser 'hello'

nums = [3, 4, 5, 6, 7, 8]

# def is_even array
#   array.select do |value|
#     value % 2 == 0
#   end
# end

# def is_even array
#   array.select do |value|
#     value.even?
#   end
# end

# def is_even array
#   array.select { |value| value.even? }
# end
#
# p is_even nums
# p is_even 1..100

def is_even array
  array.select.with_index do |value, index|
    index.even?
  end
end

p is_even ['hi', 'hello', 'yo', 'hey']
p is_even 1..100
