var ImageView = Backbone.View.extend({
  
  className: 'image-viewer right',

  events: {
    'change select': 'ratingChanged'
  },

  initialize: function() {
     this.render();
  },

  render: function() {
     
     this.$el.html('');
     this.$el.append('<img class=\'image\' src=\'' + this.model.get('src') + '\'/>');

     var container = $('<div></div>');
     container.append('<span style=\'padding-right: 30px\'>' + this.model.get('description') + '</span>');
     container.append('<span>' + this.model.get('rating') + ' out of 5</span>');
     container.append('<span style=\'padding-left: 15px\'><select> ' +
        '<option selected disabled>Rating</option>' +
        '<option value=\'0\'>0</option>' +
        '<option value=\'1\'>1</option>' +
        '<option value=\'2\'>2</option>' + 
        '<option value=\'3\'>3</option>' + 
        '<option value=\'4\'>4</option>' +
        '<option value=\'5\'>5</option>' +
      '</select></span>');

   
     this.$el.append(container);    

     return this;
  },

  setCurrentImage: function(currentImageModel) {

    this.model = currentImageModel;
    this.render();
  },

  ratingChanged: function(selectEvent) {
    this.model.changeRating(selectEvent.currentTarget.value);
    this.render();
  }

});