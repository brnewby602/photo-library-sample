var ImageRowView = Backbone.View.extend({
  
  tagName: 'tr',
  className: 'image-row',

  events: {
    'click': 'rowClicked'
  },

  initialize: function() {

     this.on('click', this.rowClicked);

     this.render();
  },

  render: function() {
     
     this.$el.append(this.model.get('description'));
     return this;
  },

  rowClicked: function(imageModel) {

    // TODO: must display this image in the ImageView

    this.model.clicked();

    // console.log('row clicked: ' + imageModel);
  }

});