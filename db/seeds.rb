# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mike = User.create(user_name: "Mike", password: "rooster")
homer = User.create(user_name: "Homer", password: "rooster")
ChatMessage.create(body: "Hello", user_id: mike.id)
ChatMessage.create(body: "D'OH", user_id: homer.id)
