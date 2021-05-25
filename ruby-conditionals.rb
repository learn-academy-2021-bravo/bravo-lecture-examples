# Ruby Conditionals

# Three different ways to output information: puts, print, p

# Puts - put string
# puts 'hello'

# Print - does not add a line break
# print 123
# print 123
# print 123

# P - raw version of the content
# p 'hello'

# if/end

# num = 40
# => "40 is greater than 20"
# num = 10
# => nothing
# num = 'yo'
# => error

if num > 20
  p "#{num} is greater than 20"
end

# if/else/end

# num = 10
# => "Nothing else was true."
# num = 50
# => "50 is greater than 20"

if num > 20
  p "#{num} is greater than 20"
else
  p 'Nothing else was true.'
end

# if/elsif/else/end

# num = 10
# => "10 is less than 20"
# num = 40
# => "40 is greater than 20"
# num = 20
# => "Num is 20"
# num = true
# => error

if num > 20
  p "#{num} is greater than 20"
elsif num < 20
  p "#{num} is less than 20"
elsif num === 20
  p 'Num is 20'
else
  p 'Nothing else was true.'
end


# Input
# gets - a method that collect info from the user
# save that content into a variable
# name = gets
# p name

# Add a label:
# p "Enter you name:"
# name = gets
# p name

# A gets will always return a string
# p "Enter you name:"
# name = gets.chomp
# p "hey there, #{name}"

p "Enter yes or no:"
answer = gets.chomp

if answer.downcase == 'yes' || answer.downcase == 'y'
  p 'You chose yes.'
elsif answer.downcase == 'no'
  p 'You chose no.'
else
  p "You rebel, you said: #{answer}"
end
