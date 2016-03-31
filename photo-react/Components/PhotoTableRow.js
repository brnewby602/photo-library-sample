class PhotoTableRow extends React.Component {
  constructor(props) {
    super(props);
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