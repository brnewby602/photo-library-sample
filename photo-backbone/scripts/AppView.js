var AppView = Backbone.View.extend({

  initialize: function(params) {

    this.titleView = new TitleView({model: params.title});
    this.imageListView = new ImageListView({collection: params.imageList});
    this.render();
  },

  render: function() {

    // clear out the html inside the <div id='app'> element
    this.$el.html('');
    this.$el.append(this.titleView.$el);

    this.$el.append(this.imageListView.$el);
    
    // ImageView's $el

    return this;
  }

});