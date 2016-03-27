var TitleView = Backbone.View.extend({
  
  tagName: 'h1',
  className: 'title',

  events: {
    'changed:title': function() { /* TODO */}
  },

  initialize: function() {

    this.render();
  },

  render: function() {
    this.$el.text(this.model.get('name'));

    return this;
  }

});