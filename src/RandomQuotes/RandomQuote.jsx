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

  generateGif = async () => {
    const response = await fetch('https://www.reddit.com/r/reactiongifs.json');
    const json = await response.json();

    const index = Math.floor(Math.random() * 25);

    console.log('# rand ', index);
    console.log('# length ', json.data.children.length, json.data.children);

    let url = json.data.children[index].data.url;
    if (url.indexOf('.gifv') > -1) {
      url = json.data.children[0].data.url;
    }

    this.setState({
      gifUrl: url,
    });
  };

  render() {
    const { quotes } = this.props;
    const { quoteToShow, gifUrl } = this.state;

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

        <button
          className="generateQuote"
          onClick={() => {
            this.generateGif();
          }}
        >
          CLICK FOR GIF
        </button>

        {gifUrl && <img style={{ height: '200px' }} src={gifUrl} alt="WOOPS" />}

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
