var ImageListView = Backbone.View.extend({

  className: 'image-list left',

  initialize: function() {
    this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);
  },

  render: function() {

    this.$el.html('');
  
    var table = $('<table></table>'); 

    table.append('<thead><th>Images</th></thead>');

    var tableBody = $('<tbody></tbody>');

    tableBody.append(this.collection.map(function (imageModel) {
      return new ImageRowView({model:imageModel}).$el;       
    }));
    
    table.append(tableBody);

    this.$el.append(table);
    
    return this;
  }

});