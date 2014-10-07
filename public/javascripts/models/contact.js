var app = app || {};

app.Contact = Backbone.Model.extend({
	defaults:{
		name: "Smokey",
    address: "the island",
    age: 2000,
    phone_number: "481-516-2342",
    picture: "http://placekitten.com/g/200/300",
    category_id: 7
  }
})

