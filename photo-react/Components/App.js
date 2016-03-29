class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: examplePhotoData[1],
      photos: examplePhotoData

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className='container'>
          <div className='left'>
            <PhotoTable photos={this.state.photos} photoClickHandler={this.handlePhotoRowClick.bind(this)} />
          </div>
          <div className='right'>
             <PhotoViewer photo={this.state.currentPhoto}/>
          </div>
        </div>
      </div>
    );
  }

  handlePhotoRowClick(photo) {
    console.log('inside handle photo row click in app');
    this.setState({currentPhoto: photo});
  }
}

ReactDOM.render(<App photos={examplePhotoData} title={photoTitle}/>, document.getElementById('app'));



