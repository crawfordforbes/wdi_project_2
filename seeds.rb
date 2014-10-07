require 'pry'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'

Category.delete_all
Contact.delete_all

friends = Category.create(name: "friends")
frenemies = Category.create(name: "frenemies")

Contact.create(name: "Sean", category_id: friends.id)
Contact.create(name: "Jeff", category_id: friends.id)
Contact.create(name: "Neel", category_id: frenemies.id)

CREATE TABLE categories(
  id serial primary key,
  name varchar(255)
);

CREATE TABLE contacts(
  id serial primary key,
  name varchar(255),
  age integer,
  address varchar(255),
  phone_number varchar(255),
  picture text,
  category_id integer
);

Category.delete_all
Contact.delete_all

survivors = Category.create(name: "Survivors")
others = Category.create(name: "Others")
dharma = Category.create(name: "Dharma")

Contact.create(name: "Jack Shepard", age: 38, address: "Los Angeles", phone_number: "815-555-8794", picture: "placeholder", category_id: survivors.id)
Contact.create(name: "Hurley Reyes", age: 27, address: "Los Angeles", phone_number: "815-555-6259", picture: "placeholder", category_id: survivors.id)
Contact.create(name: "Sun", age: 32, address: "Seoul", phone_number: "815-555-7394", picture: "placeholder", category_id: survivors.id)

Contact.create(name: "Richard Alpert", age: 38, address: "Spain", phone_number: "523-555-8725", picture: "placeholder", category_id: others.id)
Contact.create(name: "Ben Linus", age: 45, address: "USA", phone_number: "523-555-5834", picture: "placeholder", category_id: others.id)
Contact.create(name: "Juliette", age: 40, address: "Los Angeles", phone_number: "481-555-6923", picture: "placeholder", category_id: others.id)

Contact.create(name: "Horace", age: 42, address: "Los Angeles", phone_number: "481-555-6593", picture: "placeholder", category_id: dharma.id)
Contact.create(name: "Marvin Candle", age: 52, address: "Los Angeles", phone_number: "815-555-5826", picture: "placeholder", category_id: dharma.id)
Contact.create(name: "Radzynski", age: 40, address: "Los Angeles", phone_number: "523-555-4582", picture: "placeholder", category_id: dharma.id)





