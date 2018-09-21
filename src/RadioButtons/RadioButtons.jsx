import React, { Component } from 'react';
import uggla from '../uggla.jpg';

class RadioButtons extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedOption: '', inputVal: '', showMagnusPic: false };
  }

  click = str => {
    this.setState({ selectedOption: str });
  };

  onChangeType = e => {
    this.setState({ inputVal: e.target.value });
  };

  handleOnKeyPress = e => {
    if (
      e.key === 'Enter' &&
      this.state.inputVal.toLocaleLowerCase() === 'magnus'
    )
      this.setState({ showMagnusPic: true });
  };

  render() {
    const { selectedOption, showMagnusPic } = this.state;

    return (
      <React.Fragment>
        <div className="radioButtons">
          <div>
            <label>
              <input
                type="radio"
                value="notUggla"
                name="1"
                checked={selectedOption === 'notUggla'}
                onChange={() => this.click('notUggla')}
              />
              Inte Uggla
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="uggla"
                name="1"
                checked={selectedOption === 'uggla'}
                onChange={() => this.click('uggla')}
              />
              Uggla
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="alsoNotUggla"
                name="1"
                checked={selectedOption === 'alsoNotUggla'}
                onChange={() => this.click('alsoNotUggla')}
              />
              Inte heller Uggla
            </label>
          </div>
        </div>
        {selectedOption === 'uggla' && (
          <React.Fragment>
            <input
              type="text"
              placeholder="Förnamn?"
              onKeyPress={this.handleOnKeyPress}
              onChange={this.onChangeType}
            />
            {showMagnusPic && (
              <img style={{ height: '200px' }} src={uggla} alt="UGGLA" />
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default RadioButtons;
