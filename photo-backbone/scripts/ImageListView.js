var ImageListView = Backbone.View.extend({

  tagName: 'table',
  className: 'image-list',

  initialize: function() {
    this.render();
  },

  render: function() {
  
    
    this.$el.append('<thead><th>Images</th></thead>');

    var tableBody = $('<tbody></tbody>');


    // this.$el.append('<h4>Images</h4>');
    
    this.collection.each(function(imageModel) {

      var imageRow = new ImageRowView({model:imageModel});

      tableBody.append(imageRow.$el);

      // var tableRow = $('<tr></tr>');
      // tableRow.text(imageModel.get('description'));


      // var tableRow = $('<tr>' + imageModel.get('description') + '</tr>');
      // tableBody.append(tableRow);
        // console.log('imageModel', imageModel);
    });
   
    this.$el.append(tableBody);
    
    // debugger;

    return this;
  }

});