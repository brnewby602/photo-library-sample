var ImageView = Backbone.View.extend({
  
  className: 'image-viewer right',

  initialize: function() {
     this.render();
     debugger;
  },

  render: function() {
     

     console.log('<img class=\'image\' src=' + this.model.get('src') + '/>');
     this.$el.append('<img class=\'image\' src=\'' + this.model.get('src') + '\'/>');

     var container = $('<div></div>');
     container.append('<span style=\'padding-right: 30px\'>' + this.model.get('description') + '</span>');
     container.append('<span>' + this.model.get('rating') + ' out of 5</span>');
   
     this.$el.append(container);    

     return this;
  },

});