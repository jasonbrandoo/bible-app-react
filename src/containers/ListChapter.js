import React, { Component } from 'react';
import Chapters from '../components/bible/Chapters';

class ListChapter extends Component {
  state = {
    listChapter: [],
  }

  componentDidMount() {
    const { match } = this.props;
    const { bibleId, bookId } = match.params;
    this.getChapter(bibleId, bookId);
  }

  getChapter = (bibleId, bookId) => {
    const myHeaders = new Headers({
      'api-key': process.env.REACT_APP_API_KEY,
    });
    fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}/chapters`, { headers: myHeaders })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          listChapter: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this);
    const { listChapter } = this.state;
    const { match } = this.props;
    return (
      <Chapters chapters={listChapter} version={match.params.bibleId} />
    );
  }
}

export default ListChapter;
