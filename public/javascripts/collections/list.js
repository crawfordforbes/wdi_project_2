var app = app || {};

app.List = Backbone.Collection.extend({
	model: app.Contact,
	url:'/contacts'
});
