var ImageList = Backbone.Collection.extend({
  model: ImageModel,

  addNewImage: function(imageModel) {
    this.add(imageModel);
  }

});