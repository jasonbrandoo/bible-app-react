import React, { Component } from 'react';
import Passages from '../components/bible/Passages';

class PassagesContainer extends Component {
  state = {
    passages: [],
  }

  componentDidMount() {
    console.log(this);
    const { match } = this.props;
    const { bibleId, passagesId } = match.params;
    this.getPassages(bibleId, passagesId);
  }

  getPassages = (bibleId, passagesId) => {
    const myHeaders = new Headers({
      'api-key': process.env.REACT_APP_API_KEY,
      'content-type': 'json',
    });
    fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`, { headers: myHeaders })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          passages: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { passages } = this.state;
    return (
      <Passages passages={passages} />
    );
  }
}

export default PassagesContainer;
