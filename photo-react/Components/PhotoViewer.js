class PhotoViewer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
       rating: this.props.photo.rating
    };

    console.log("In PhotoTable constructor: " + this.state.rating);
  }

  render() {
    return (
        <div className='photo-viewer'>
          <img className='photo' src={this.props.photo.src} />
          <span>{this.props.photo.description}</span>
          <span>{this.state.rating} out of 5</span>
          <RatingSelector rating={this.state.rating} handleRatingChange={this.handleRatingChange.bind(this)} />
         </div>  
    );
  }

  handleRatingChange(rating) {
     this.setState({rating: rating});
     this.props.photo.rating = rating;
     this.props.handleRatingChange(this.props.photo);
  }  
}

window.PhotoViewer = PhotoViewer;