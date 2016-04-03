
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: examplePhotoData[1],
      photos: examplePhotoData

    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          <AddNewPhoto photoSubmitHandler={this.handlePhotoAdd.bind(this)} />
        </div>
        <div className='container'>
          <div className='left'>
            <PhotoTable photos={this.state.photos} photoClickHandler={this.handlePhotoRowClick.bind(this)} />
          </div>
          <div className='right'>
             <PhotoViewer photo={this.state.currentPhoto} handleRatingChange={this.handleRatingChange.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  // Callback used when a photo a photo is clicked on in PhotoTableRow
  handlePhotoRowClick(photo) {
    this.setState({currentPhoto: photo});
  }

  // Callback used when a photo gets submitted from AddNewPhoto Component
  handlePhotoAdd(photo) {
     this.setState( {
       photos: this.state.photos.concat(photo)
     });
  }

  // Callback for the rating select element in PhotoViewer
  handleRatingChange(photo) {
    debugger;
    this.setState({currentPhoto: photo});
  }
}

ReactDOM.render(<App photos={examplePhotoData} title={photoTitle}/>, document.getElementById('app'));



