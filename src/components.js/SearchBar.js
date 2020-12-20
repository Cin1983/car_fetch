import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };
    onFormSumit(event) {
        event.preventDefault();
       
   }

  render() {
    return (
      <div className="ui segment">
            <form onSubmit={this.onFormSumit} className="ui_form">
          <label> CHOOSE YOUR CAR!!! </label>
          <div className="field">
                    <input type="text" value={this.state.term}
                        onChange={ event => this.setState({ term: event.target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
