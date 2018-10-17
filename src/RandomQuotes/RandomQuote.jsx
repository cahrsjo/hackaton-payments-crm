import React, { Component } from 'react';
import uggla from '../uggla.jpg';
import './RandomQuote.css';
class RandomQuote extends Component {
  constructor(props) {
    super(props);

    this.state = { quoteToShow: {}, gifUrl: '' };
  }

  generateQuote = random => {
    this.setState({ quoteToShow: this.props.quotes.quotes[random] });
  };

  render() {
    const { quotes } = this.props;
    const { quoteToShow } = this.state;

    return (
      <div className="quote">
        <h2 style={{ margin: '10px 0' }}>QUOTES! (ง^ᗜ^)ง</h2>
        <button
          className="generateQuote"
          onClick={() => {
            this.generateQuote(
              Math.floor(Math.random() * quotes.quotes.length)
            );
          }}
        >
          Generate quote
        </button>

        <React.Fragment>
          <p className="quoteText">{quoteToShow.quote}</p>
          <p className="quoteBy">{quoteToShow.by}</p>
        </React.Fragment>

        {quoteToShow.by === 'Kung Uggla' && (
          <img style={{ height: '300px' }} src={uggla} alt="UGGLA" />
        )}
      </div>
    );
  }
}

export default RandomQuote;
