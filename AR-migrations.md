# Rails Migrations
Updating or changing the Model in our Database

# What is a migration
A migration is a file that is generated through a rails command that specifically allow us to make updates to our the database

$ rails generate migration add_item_to_schedule

$ rails generate migration AddItmeToSchedule

$ rails g migration add_item_to_schedule


# Commands 
 ### make the app
$ rails new movie_challenge -d postgresql -T
 ### cd into app
$ cd movie_challenge
 ### create database
$ rails db:create   
       
        rails db:drop to delete the DB (BE SUPER CAREFUL)
 ### create model
$ rails g model Movie (CAPITALIZED "M" FOR MOVIE)
 ### migrate model
$ rails db:migrate
 ### create migration
$ rails g migration add_item_to_table

  ### add code to change method
     add_column :table, :column, :datatype
 ### migrate
$ rails db:migrate

 ### create migration
$ rails g migration remove_column_from_table

  ### add code to change method
  remove_column :table_name, :column_name
 
 ### migrate
$ rails db:migrate


 ### create migration
$ rails g migration rename_column_in_movie_table

  ### add code to change method
  rename_column :table_name, :column_name, :new_column_name
 ### migrate
$ rails db:migrate