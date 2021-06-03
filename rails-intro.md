# Ruby on Rails

### General Notes
- Rails is a framework written in Ruby
- Framework - dictates the control of how a dev interacts with the application
- DHH - creator of Rails, 2004/2005
- Rails is a server-side web framework that provides default code for the db, views/web pages, HTML/CSS, JS

### MVC
- Rails follows the MVC architecture pattern - Model, View, Controller
- View - HMTL, CSS, JS, React
- Model - database layer
- Controller - switchboard for your app
- Having all the parts of MVC means you have a full-stack application, but those parts can come from different technologies

### Create a Rails App
- ``$ rails new my_new_app -d postgresql -T`
- `rails new` - command that creates a new app
- `my_new_app` - name of the app, must be snake case (lowercase)
- `-d` - removes the default db that comes with Rails out of the box
- `postgresql` - replace the removed db with the db we want to use
- `-T` - removes the default testing framework

### How Rails Works
- "Convention over configuration", Rails motto
- Rails makes architecture decisions for the dev and lets the dev solve more interesting problems
- Rails is incredibly picky with naming and casing conventions

### Files/Folders of Importance
- gemfile
- app/models
- app/controllers
- app/views
- config/routes.rb
- db

### Starting a Rails App
- $ rails db:create (creates the db on your machine)
- $ rails s (rails start - fires up the server)
- A browser window will not automatically open

### Stoping a Rails App
- control + c

### Deleting a Rails App
- $ rails db:drop
- Remove file structure
