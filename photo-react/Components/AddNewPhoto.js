class AddNewPhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <form name='newimage'>
          Image: <input type='text' name='src'></input>
          Title: <input type='text' name='description'></input>
          <input type='submit' value='Save Photo'></input>
        </form>
        <span>Hello, I'm a add new photo component</span>
      </div>
    );
  }

}

window.AddNewPhoto = AddNewPhoto;