require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)


# (1..5).each do |id|
#     User.create!(
#         id: id, 
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         email: Faker::Internet.email, 
#         password: "password"

#     )
# end


# grades = Grade.create([{ name: 'VB', type_id: 1}, { name: 'V0', type_id: 1}, { name: 'V1', type_id: 1}, { name: 'V2', type_id: 1}, { name: 'V3', type_id: 1}, { name: 'V4', type_id: 1}, { name: 'V5', type_id: 1}, { name: 'V6', type_id: 1}, { name: 'V7', type_id: 1}, { name: 'V8', type_id: 1}, { name: 'V9', type_id: 1}, { name: 'V10', type_id: 1}, { name: 'V11', type_id: 1}, { name: 'V12', type_id: 1}, { name: 'V13', type_id: 1}, { name: 'V14', type_id: 1}, { name: 'V15', type_id: 1}, { name: '5.6'}, { name: '5.7'}, { name: '5.8'}, { name: '5.9'}, { name: '5.10a'}, { name: '5.10b'}, { name: '5.10c'}, { name: '5.10d'}, { name: '5.11a'}, { name: '5.11b'}, { name: '5.11c'}, { name: '5.11d'}, { name: '5.12a'}, { name: '5.12b'}, { name: '5.12c'}, { name: '5.12.d'}, { name: '5.13a'}, { name: '5.13b'}, { name: '5.13c'}, { name: '5.13d'}, { name: '5.14a'}, { name: '5.14b'}, { name: '5.14c'}, { name: '5.14d'}, { name: '5.15a'}, { name: '5.15b'}, { name: '5.15c'}, { name: '5.15d'}])

types = Type.create([ { route_type: 'Boulder' }, { route_type: 'Lead' }, { route_type: 'Toprope' }])

# route1 = Route.create([{ grade_id: 21, type_id: 2, user_id: 1, name: 'A Beautiful Life', country: 'USA', crag: 'Sinks Canyon', comments: 'Left line on the small slab towards the far left side of Addiction Wall. 8 bolts.', coordinates: '', gym_route: false}])
# route2 = Route.create([{ grade_id: 10, type_id: 1, user_id: 1, name: 'A Big Round of Applause', country: 'USA', crag: 'Bishop', comments: 'Traverse up and to the right until the center, then straight up over the overhang.', coordinates: '', gym_route: false}])


# Data above has been seeded.

# routes = Route.create([{ grade_id: int, type_id: int, user_id: int, name: 'string', country: 'string', crag: 'string', comments: 'text', coordinates: string, gym_route: boolean, date_created: date }])
