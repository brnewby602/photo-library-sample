class PhotoViewer extends React.Component {

  constructor(props) {
    super(props);

    this.optionValues = [0,1,2,3,4,5];

    console.log("In PhotoTable constructor");
  }

  render() {
    return (
      <div className='photo-viewer'>
        <img className='photo' src={this.props.photo.src} />
        <div>
          <span>{this.props.photo.description}</span>
          <span>{this.props.photo.rating} out of 5</span>
          <select value='Change Rating'>
            <option defaultValue>Rating</option>
             {
              this.optionValues.map( (option) => ( <option value={option}>{option}</option> ) )    
            }
           </select>
         </div>
       </div>
    );
  }
}

window.PhotoViewer = PhotoViewer;