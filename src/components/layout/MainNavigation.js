import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
      <div>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
