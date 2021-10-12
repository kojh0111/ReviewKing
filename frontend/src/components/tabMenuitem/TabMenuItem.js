import './TabMenuItem.scss';
import { NavLink } from 'react-router-dom';

function TabMenuItem(props) {
  const scrollToServiceSection = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="TabWrapper">
      <NavLink
        className="menu-item"
        to={props.path}
        exact={props.exact ? props.exact : false}
        activeStyle={{
          color: '#ff5722',
        }}
        onClick={scrollToServiceSection}
      >
        {props.title}
      </NavLink>
    </div>
  );
}

export default TabMenuItem;
