import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

it('Reders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON;
  expect(tree).toMatchSnapshot();
});
