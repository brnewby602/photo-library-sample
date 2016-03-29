class PhotoViewer extends React.Component {

  constructor(props) {
    super(props);

    console.log("In PhotoTable constructor");
  }

  render() {
    return (
       <div className='photo-viewer'>
         <img className='photo' src={this.props.photo.src} />
         <div>
           <span>{this.props.photo.description}</span>
           <span>{this.props.photo.rating} out of 5</span>
         </div>
       </div>
    );
  }
}

window.PhotoViewer = PhotoViewer;