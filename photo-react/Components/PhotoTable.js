class PhotoTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className='photo-list'>
        <thead>
          <tr>Images</tr>
        </thead>
        <tbody>
           {
            this.props.photos.map( (photo) => ( <PhotoTableRow photo={photo} photoClickHandler={this.props.photoClickHandler} /> ) )
           }
        </tbody>
      </table>
    );
  }
}

window.PhotoTable = PhotoTable;