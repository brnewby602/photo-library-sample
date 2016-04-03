class PhotoViewer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='photo-viewer'>
          <img className='photo' src={this.props.photo.src} />
          <div>
            <span>{this.props.photo.description}</span>
            <span className='rating'>{this.props.photo.rating} out of 5</span>
            <RatingSelector rating={this.props.photo.rating} handleRatingChange={this.props.handleRatingChange} />
          </div>
         </div>  
    );
  }
}

window.PhotoViewer = PhotoViewer;