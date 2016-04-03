class AddNewPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: '',
      description: ''
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
    console.log('inside onPhotoSubmit, src = ' + this.state);
    this.props.photoSubmitHandler(this.state);
  }

 
  handlePhotoSrcChange(e) {

    console.log(this);
    this.setState({src: e.target.value});
  }


  handlePhotoTextChange(e) {
    this.setState({description: e.target.value});
  }

/*
        <form name='newimage' onSubmit={() => this.props.photoSubmitHandler}>



*/
}



window.AddNewPhoto = AddNewPhoto;