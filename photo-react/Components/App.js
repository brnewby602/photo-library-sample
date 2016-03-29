class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className='container'>
          <div className='left'>
            <PhotoTable photos={this.props.photos} photoClickHandler={this.handlePhotoRowClick} />
          </div>
          <div className='right'>
             <PhotoViewer photo={this.props.photos[1]}/>
          </div>
        </div>
      </div>
    );
  }

  handlePhotoRowClick() {
    console.log('inside handle photo row click in app');
  }
}

ReactDOM.render(<App photos={examplePhotoData} title={photoTitle}/>, document.getElementById('app'));



