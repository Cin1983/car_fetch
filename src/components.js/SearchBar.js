import React from "react";


class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    };

  render() {
    return (
      <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui_form">
          <label> <p>Just type and search </p> </label>
          <div className="field">
                    <input type="text" value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })} />
            
            <button >submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
