# Ruby!

- Yukihiro "Matz" Matsumoto - creator of Ruby
- MINASWAN - Mats is nice and so we are nice

### General Ruby Notes
- Dynamic - dynamically typed, variables don't care about the data they are holding
- General purpose scripting language
- Interpreted language
- Ruby does not support type coercion
- Open-sourced
- OOP - everything is an object (an instance of a class)

### IRB
- Check version - $ ruby -v
- $ irb - Ruby console, interactive ruby
- To get out of the console - exit

### Integer
- Whole numbers
- Perform mathematical operations + - * / ** %

### Float
- Partial numbers
- If you want a float you must start with a float

### String
- - Single quotes

### Boolean
- True/false
- Equality operators - ==
- Relational operators - < > <= >= !=
- Logical operators - && ||

### Nil
- Equal to nothing else in the program

### Symbols
- Keys in a hash

### Variables
- snake_case naming convention
- No variable declarations in Ruby

### String Interpolation
"Hey, there #{my_name}"

### Built in Methods
- .length
- .upcase
- .capitalize
- .reverse
- .delete'h'
- .delete('h')
- .class
- .to_s - to string
- .to_i - to integer
- Methods are accessors unless we reassign the variable or add the ! to the end of the method

### Arrays
- my_nums = [3, 4, 5, 6, 7]
- my_nums.length
- my_nums[2]
- my_nums.first

### Array Mutators
- Permentently affects the array
- my_nums[2] = 89
- Shovel operator
- my_nums << 100
