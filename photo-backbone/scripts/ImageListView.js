var ImageListView = Backbone.View.extend({

  tagName: 'table',
  className: 'image-list',

  initialize: function() {
    this.render();
  },

  render: function() {
  
    
    this.$el.append('<thead><th>Images</th></thead>');

    var tableBody = $('<tbody></tbody>');

    tableBody.append(this.collection.map(function (imageModel) {
      return new ImageRowView({model:imageModel}).$el;       
    }));
    
    this.$el.append(tableBody);
    
    return this;
  }

});