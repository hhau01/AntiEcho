import React from 'react';
import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';

// handleKeyPress(event) {
//   if (event.charCode == 13) {
//     console.log('enter hit')
//     event.preventDefault();
//     event.stopPropagation();
//     this.props.table.handleSubtotalBy(this.props.columnDef, this.state.userInputBuckets);
//   }
// }

const Search = props => {
  return (
    <div id="search-field">
      <TextField
        value={props.steering.textValue}
        onChange={e => props.handleSearch(e.target.value)}
        onKeyPress={(e) => props.handleKeyPress(e)}
        hintText="Search here for news" />
      <br />
      {/* <FlatButton
        id="search-button"
        onClick={props.onSubmit}
        label="Search"
        primary={true} /> */}
    </div>
  );
};

export default Search;
