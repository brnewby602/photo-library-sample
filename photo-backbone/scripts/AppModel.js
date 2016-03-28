var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    // debugger;
    this.set('currentPhoto', params.imageList.at(0));
    this.set('photoList', params.imageList);
    this.set('title', params.title);    

    params.imageList.on('clicked', function(imageModel) {
      console.log('inside AppModel clicked event handler on collection');
      console.log(imageModel);

      this.set('currentPhoto', imageModel);
    }, this);

    params.imageList.on('add', function(imageModel) {
       this.set('currentPhoto', imageModel);
    }, this);
  }

});