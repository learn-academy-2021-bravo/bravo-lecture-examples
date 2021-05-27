# Ruby Hashes 5/27/2021

# Hashes have key values pairs
# Wrapped in curlies
# Keys that are the data type symbol
# Values that are any data type Ruby recognizes

# 1) Define hash using curlies and key:values:
learn_staff = {instructor: 'Austin', career: 'Jake', marketing: 'TJ'}

p learn_staff
# Output - {:instructor=>"Austin", :career=>"Jake", :marketing=>"TJ"}

# :symbol - another way to define symbols
# => hash rocket

# 2) Intialize a new instance of the class Hash
my_hash = Hash.new
p my_hash

# Four main actions:
# 1) READ
# 2) CREATE
# 3) UPDATE
# 4) DELETE

learn_staff = {instructor: 'Austin', career: 'Jake', marketing: 'TJ'}

# READ
p learn_staff
p learn_staff[:marketing]

# CREATE
learn_staff[:enrollment] = 'Kumba'
learn_staff[:boss_lady] = 'Chelsea'
learn_staff[:fake] = 'Tester'
p learn_staff
p learn_staff[:boss_lady]

# UPDATE
learn_staff[:instructor] = 'Austin W'
p learn_staff

# DELETE
learn_staff.delete(:fake)
p learn_staff


# Modules - grouping of things that have similar properties

# Enumerable - things that are iterable
# Iteration - preforming an action a particular number of times or until a conition is met
# Arrays, ranges, hashes

# Duck Typing - looking at the behavior of the data rather than the definition of the method

# Iterating with .each
learn_staff.each do |key, value|
  p "#{value}"
end

# Wrapping in a custom method and iterating with .map
def my_coworkers hash
  hash.map do |key, value|
    "My coworker is #{value}"
  end
end

p my_coworkers learn_staff
