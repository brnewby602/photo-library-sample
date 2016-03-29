class PhotoTable extends React.Component {

  constructor(props) {
    super(props);

    console.log("In PhotoTable constructor");
  }

  render() {
    return (
      <table>
        <tbody>
           {
            this.props.photos.map( (photo) => ( <PhotoTableRow photo={photo} /> ) )
           }
        </tbody>
      </table>
    );
  }
}

window.PhotoTable = PhotoTable;