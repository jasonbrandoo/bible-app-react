import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const ListChapter = ({
  match: {
    params: { bibleId, bookId },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}/chapters`,
  );

  let chapter;

  if (state.data === null) {
    chapter = <Text>loading</Text>;
  }
  if (state.error) {
    chapter = <Text>Oopss something went error</Text>;
  }
  if (state.data) {
    chapter = state.data.map(value => (
      <Link to={`/${bibleId}/passages/${value.id}`}>{value.reference}</Link>
    ));
  }

  return <List>{chapter}</List>;
};

/* 
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
 */
export default ListChapter;
