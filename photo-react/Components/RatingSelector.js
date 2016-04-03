class RatingSelector extends React.Component {

    constructor(props) {
      super(props);
      //this.state = {selectValue: this.props.rating};
    }

    handleSelectChange(e) {
        // this.setState({selectValue: e.target.value});
        this.props.handleRatingChange(e.target.value);
    } 

    render() {
        return (
         <div>
           <select defaultValue={this.props.rating} onChange={this.handleSelectChange.bind(this)} value={this.props.rating}>
             <option value='0'>0</option>
             <option value='1'>1</option>
             <option value='2'>2</option>
             <option value='3'>3</option>
             <option value='4'>4</option>
             <option value='5'>5</option>
           </select>
          </div>        
        );
    }
};
 
window.RatingSelector = RatingSelector;
