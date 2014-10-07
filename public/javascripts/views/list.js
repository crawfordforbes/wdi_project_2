var app = app || {};

var pic = $.ajax({
	url: 'http://api.randomuser.me/',
	dataType: 'json',
	success: function(data){
		var randPic = data["results"][0]["user"]["picture"]["medium"]
		return data
	}

});

app.ListView = Backbone.View.extend({
	el: '#contacts',

	events:{
		'click #add':'addContact'
	},

	addContact: function(e){
		e.preventDefault();
		var formData = {picture: pic["responseJSON"]["results"][0]["user"]["picture"]["medium"]};
		$('#addContact div').children('input').each(function(i, el) {
			if($(el).val() !='')
			{
				formData[el.id] = $(el).val();
			}
		});
		$('#addContact div').children('select').each(function(i, el) {
			if($(el).val() !='')
			{
				formData[el.id] = $(el).val();
			}
		});

		this.collection.create(formData);
	},
	initialize: function() {
		this.collection = new app.List();
		this.collection.fetch({reset: true});
		this.render();
		this.listenTo(this.collection, 'add', this.renderContact);
		this.listenTo(this.collection, 'reset', this.render);
	},

	render: function() {
		this.collection.each(function(item) {
			this.renderContact(item);
		}, this );
	},

	renderContact: function(item) {
		var contactView = new app.ContactView({
			model: item
		});
		this.$el.append(contactView.render().el);
	}
});

