var ImageModel = Backbone.Model.extend({
  defaults: {
    name: 'pug-yoda',
    src: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&amp;fit=crop&amp;fm=jpg&amp;h=475&amp;ixjsv=2.1.0&amp;ixlib=rb-0.3.5&amp;q=80&amp;w=725" class="single-photo__fake-image js-fluid-image',
    description: 'Preparing to fight the dark side.',
    rating: 5
  },

  clicked: function() {
    this.trigger('clicked', this); 
  },

  changeRating: function(rating) {
    this.set('rating', rating);  
  }

});