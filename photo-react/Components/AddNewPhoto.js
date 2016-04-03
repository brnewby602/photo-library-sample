class AddNewPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: '',
      description: '',
      rating: 0
    };

  }

  render() {
    return (
      <div>
        <form name='newimage'>
          Image: <input type='text' name='src' onChange={this.handlePhotoSrcChange.bind(this)} />
          Title: <input type='text' name='description' onChange={this.handlePhotoTextChange.bind(this)} />
          <input type='button' value='Save Photo' onClick={this.onPhotoSubmit.bind(this, event) } />
        </form>
      </div>
    );
  }

  onPhotoSubmit(event) {
    event.preventDefault();
    this.props.photoSubmitHandler(this.state);
  }

  handlePhotoSrcChange(e) {
    this.setState({src: e.target.value});
  }

  handlePhotoTextChange(e) {
    this.setState({description: e.target.value});
  }

}



window.AddNewPhoto = AddNewPhoto;