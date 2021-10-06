import './TabMenuItem.scss';
import { NavLink } from 'react-router-dom';

function TabMenuItem(props) {
  return (
    <div className="TabWrapper">
      <NavLink
        className="menu-item"
        to={props.path}
        exact={props.exact ? props.exact : false}
        activeStyle={{
          color: '#FF5722',
        }}
      >
        {props.title}
      </NavLink>
    </div>
  );
}

export default TabMenuItem;
