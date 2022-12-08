import renderer from 'react-test-renderer';
import Home from '../Home';

it('Renders works', () => {
  const tree = renderer.create(<Home />).toJSON;
  expect(tree).toMatchSnapshot();
});
