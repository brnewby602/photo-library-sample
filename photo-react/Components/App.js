class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
         Hello
      </div>
    );
  }
}

ReactDOM.render(<App photos={examplePhotoData}/>, document.getElementById('app'));