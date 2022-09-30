# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mike = User.create(user_name: "Mike", password: "rooster")
homer = User.create(user_name: "Homer", password: "rooster")
room1 = Conversation.create(room_name: "Test Room")
room2 = Conversation.create(room_name: "Test Room2")
room1.chat_messages.create(body: "Hello", user_id: mike.id)
room1.chat_messages.create(body: "D'OH", user_id: homer.id)
room1.chat_messages.create(body: "I'm in test room 1", user_id: homer.id)
room2.chat_messages.create(body: "This is room 2", user_id: mike.id)
room2.chat_messages.create(body: "I know", user_id: homer.id)
