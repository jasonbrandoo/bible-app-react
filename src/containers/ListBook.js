import React, { Component } from 'react';
import Books from '../components/bible/Books';

class ListBook extends Component {
  state = {
    listBook: [],
  }

  componentDidMount() {
    const { match } = this.props;
    const { bibleId } = match.params;
    this.getBook(bibleId);
  }

  shouldComponentUpdate(nextProps) {
    const { bibleId } = nextProps.match.params;
    const { match } = this.props;
    const bookId = match.params.bibleId;
    if (bibleId !== bookId) {
      this.getBook(bibleId);
    }
    return true;
  }

  getBook = (bibleId) => {
    const myHeaders = new Headers({
      'api-key': process.env.REACT_APP_API_KEY,
    });
    fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books`, { headers: myHeaders })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          listBook: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { listBook } = this.state;
    const { match } = this.props;
    return (
      <Books books={listBook} version={match.params.bibleId} />
    );
  }
}

export default ListBook;
