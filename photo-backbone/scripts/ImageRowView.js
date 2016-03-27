var ImageRowView = Backbone.View.extend({
  
  tagName: 'tr',
  className: 'image-row',

  initialize: function() {
     // console.log('inside ImageRowView initialize');
     this.render();
  },

  render: function() {
     
     this.$el.append(this.model.get('description'));
     return this;
  }

});