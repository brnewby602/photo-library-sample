var AppView = Backbone.View.extend({

  initialize: function(params) {

    this.titleView = new TitleView({model: this.model.get('title')});

    this.newImageView = new NewImageView({collection: this.model.get('photoList')});

    this.imageListView = new ImageListView({collection: this.model.get('photoList')});


    // default to first in collection, need to create a currentPhoto variable
    // that will then cause the ImageViewer to update on its change
    this.imageView = new ImageView({model: this.model.get('currentPhoto')});

    this.model.on('change:currentPhoto', function(imageModel) {
       var currentPhoto = this.model.get('currentPhoto');
       this.imageView.setCurrentImage(currentPhoto);
    }, this);


    this.render();
  },

  render: function() {
     return this.$el.html([
      this.titleView.$el,
      this.newImageView.$el,
      this.imageListView.$el,
      this.imageView.$el
    ]);
  }

});