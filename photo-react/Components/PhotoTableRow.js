class PhotoTableRow extends React.Component {
  constructor(props) {
    super(props);

    console.log('inside photo table row constructor, props  = ' + props);

    // need to have a callback passed down to be able to execute
    // on onclick event
  }

  render() {
    return (
      <tr onClick={() => this.props.photoClickHandler(this.props.photo)}>
        <td className='photo-description'>{this.props.photo.description}</td>
      </tr>
    )
  }
}

window.PhotoTableRow = PhotoTableRow;