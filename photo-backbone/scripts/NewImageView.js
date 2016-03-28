var NewImageView = Backbone.View.extend({
  
  className: 'new-image-container',

  events: {
    'submit': 'newPhotoRequest'
  },

  initialize: function() {
     this.render();
  },

  render: function() {

    var formHtml = '<form name=\'newimage\'>'  +
                      'Image: <input type=\'text\' name=\'src\'>' +
                      'Title: <input type=\'text\' name=\'description\'>' +
                      '<input type=\'submit\' value=\'Save Photo\'>' + 
                   '</form>';
     
    this.$el.append(formHtml);

    return this;
  },

  newPhotoRequest: function(form) {
    form.preventDefault();

    var model = new ImageModel();
    this.$el.find('input[name]').each(function() {
      model.set(this.name, this.value);
    });

    this.collection.addNewImage(model);
  }

});