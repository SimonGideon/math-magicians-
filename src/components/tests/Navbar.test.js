import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavbarContainer from '../Navbar';

it('Rendered as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NavbarContainer />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
