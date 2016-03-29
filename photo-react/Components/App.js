class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
         <PhotoTable photos={this.props.photos} />
      </div>
    );
  }
}

ReactDOM.render(<App photos={examplePhotoData} />, document.getElementById('app'));



