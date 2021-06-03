# Rails Active Record

### Setup
- $ rails new rails_active_record -d postgresql -T
- $ cd into project
- $ rails db:create

### Active Record Overview
- ORM - object relational mapping, translator between two other languages
- Active Record is an ORM between Rails/Ruby <> PostgreSQL, allows us to write SQL queries in Ruby-like code
- Active Record allows us to treat database tables as classes and the each row as an object

### The DB
- Once we create the db it is empty
- Make a table in the db:
  1. rails generate command
  2. Active Record data types

### Rails Generate Command
- Rails is very picky so for the most part when you change the structure of the app it should be through a rails generate commands
- $ `rails generate model Schedule day:string event_date:date event_name:string`
- $ `rails generate` - is the command to create a new thing
- $ `rails generate model` - creating a new model
- $ `rails generate model Schedule` - creating a new model with the name of the model, which is a class
  - Name of the model (table) through the lens of Ruby/Rails/ActiveRecord is a class and must be named like a class which is PascalCase (this is VERY important)
- Columns for our model: day, event_date, event_name
- NOTE: no spaces between keys (column names) and values (data types), no commas


### ActiveRecord Data Types
- There are many but
String - small amounts of characters
Text - larger amount of characters
Integer - numbers
Date/time/datetime


### Rails Created Two Files
- Model class and the migration
- Migration is the things that creates the db table
- $ rails db:migrate
- After running the migration we got a file called schema.rb
- Schema is the representation of the current state of the db


### Interacting with the DB
- Rails console - $ rails c
- We want to do CRUD actions on the data - create, read, update, delete

#### READ
- Get all the things
  - `Schedule.all`
  - That is the same as doing: `SELECT * FROM schedules`
  - Returns: `#<ActiveRecord::Relation []>` (empty array)
- Get particular things:
  - Schedule.first
  - Schedule.last
  - Schedule.second
  - Schedule.third
  - By id: `Schedule.find 2`
- Get a set of things (an array): `Schedule.where day: 'Thursday'`
  - Get a single thing from the set: `Schedule.where(day: 'Tuesday').first`
  - Extract the first item from the array set

#### CREATE
- Schedule.create day: 'Tuesday', event_date: '2021-06-08', event_name: 'Yoga'
  - This is the same thing as: Schedule.create(day: 'Tuesday', event_date: '2021-06-08', event_name: 'Yoga')
- Returns: `#<ActiveRecord::Relation [#<Schedule id: 1, day: "Tuesday", event_date: "2021-06-08", event_name: "Yoga", created_at: "2021-06-03 21:54:05.011343000 +0000", updated_at: "2021-06-03 21:54:05.011343000 +0000">]>` (array with one thing)
- Create more things:
  - Schedule.create day: 'Thursday', event_date: '2021-06-03', even
t_name: 'White boarding practice'
  - Schedule.create day: 'Thursday', event_date: Date.today, event_
name: 'SD Ruby meetup'
  - Schedule.create day: 'Thursday', event_date: Date.today, event_
name: 'SD Ruby meetup'

#### UPDATE
- Create a variable to store the instance we want to update
- yoga = Schedule.where(day: 'Tuesday').first
- yoga.event_date = '2021-06-15'
- This command updates the variable
- yoga.save
- This command updates the db

#### DELETE
- Create a variable to store the thing you want to delete
- w = Schedule.second
- w.destroy
