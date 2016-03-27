var ImageView = Backbone.View.extend({
  
  className: 'image-viewer',

  initialize: function() {
     this.render();
     debugger;
  },

  render: function() {
     

     console.log('<img class=\'image\' src=' + this.model.get('src') + '/>');
     this.$el.append('<img class=\'image\' src=\'' + this.model.get('src') + '\'/>');

     this.$el.append('<span style=\'padding-right: 30px\'>' + this.model.get('description') + '</span>');
     this.$el.append('<span>' + this.model.get('rating') + ' out of 5</span>');

     return this;
  },

});