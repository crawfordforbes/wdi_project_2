var app = app || {};

app.ContactView = Backbone.View.extend({
	tagName:'div',
	className: 'contactContainer',
	template: _.template($('#contact-template').html()),

	events: {
		'click .delete':'deleteContact',
	},

	deleteContact: function() {
		this.model.destroy();
		this.remove();
	},

	render: function() {
		if (this.model.attributes.category_id == 6) {
			this.model.set("category_id", "Survivors")
		} else if (this.model.attributes.category_id == 7) {
			this.model.set("category_id", "Others")
		} else if (this.model.attributes.category_id == 8) {
			this.model.set("category_id", "Dharma")
		}
		this.$el.html(this.template(this.model.attributes));
			return this;
	},

});