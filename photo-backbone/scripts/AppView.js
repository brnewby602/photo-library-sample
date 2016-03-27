var AppView = Backbone.View.extend({

  initialize: function(params) {

    this.titleView = new TitleView({model: this.model.get('title')});

    debugger;
    this.imageListView = new ImageListView({collection: this.model.get('photoList')});


    // default to first in collection, need to create a currentPhoto variable
    // that will then cause the ImageViewer to update on its change
    this.imageView = new ImageView({model: this.model.get('currentPhoto')});


    this.render();
  },

  render: function() {

    // clear out the html inside the <div id='app'> element
    this.$el.html('');
    this.$el.append(this.titleView.$el);

    this.$el.append(this.imageListView.$el);

    this.$el.append(this.imageView.$el);
    
    // ImageView's $el

    return this;
  }

});