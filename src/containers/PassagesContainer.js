import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );

  let passage;

  if (state.data === null) {
    passage = <Text>loading</Text>;
  }
  if (state.error) {
    passage = <Text>Oopss something went error</Text>;
  }
  if (state.data) {
    const {
      data: { content },
    } = state;
    passage = <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <List>{passage}</List>;
};
/* 
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
} */

export default Passages;
