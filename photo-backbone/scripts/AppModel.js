var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    debugger;
    this.set('currentPhoto', new ImageModel());
    this.set('photoList', params.imageList);
    this.set('title', params.title);    
  }
  

});