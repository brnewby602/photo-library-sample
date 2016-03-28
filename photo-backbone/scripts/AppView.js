var AppView = Backbone.View.extend({

  initialize: function(params) {

    this.titleView = new TitleView({model: this.model.get('title')});
    this.imageListView = new ImageListView({collection: this.model.get('photoList')});


    // default to first in collection, need to create a currentPhoto variable
    // that will then cause the ImageViewer to update on its change
    this.imageView = new ImageView({model: this.model.get('currentPhoto')});

    this.model.on('change:currentPhoto', function(imageModel) {

       console.log('inside change:currentPhoto of AppView!!');

       debugger;
       var currentPhoto = this.model.get('currentPhoto');

       this.imageView.setCurrentImage(currentPhoto);
    }, this);


    this.render();
  },

  render: function() {


     return this.$el.html([
      this.titleView.$el,
      this.imageListView.$el,
      this.imageView.$el
    ]);

    // clear out the html inside the <div id='app'> element
    /*
    this.$el.html('');
    this.$el.append(this.titleView.$el);

    this.$el.append(this.imageListView.$el);

    this.$el.append(this.imageView.$el);

    
    // ImageView's $el

    return this;
    */
  }

});