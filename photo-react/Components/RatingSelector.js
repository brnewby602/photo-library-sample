class RatingSelector extends React.Component {

    constructor(props) {
      super(props);
      this.state = {selectValue: 'Change Rating'};
      this.ratings = ['Change Rating',0,1,2,3,4,5];
    }

    handleChange(e) {
        this.setState({selectValue:e.target.value});
    } 

    render() {
        return (
         <div>
          <select defaultValue={this.state.selectValue} onChange={this.handleChange} >
          { this.ratings.map( (option) => ( <option value={option}>{option}</option> ) ) }       
          </select>
        
          </div>        
        );
    }
};
 
window.RatingSelector = RatingSelector;
