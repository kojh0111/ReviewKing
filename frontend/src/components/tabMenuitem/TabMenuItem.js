import './TabMenuItem.scss';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

function TabMenuItem(props) {
  const scrollToServiceSection = () => {
    scroller.scrollTo('ServicePageContainer', { smooth: true, duration: 1500 });
  };

  return (
    <div className="TabWrapper">
      <NavLink
        className="menu-item"
        to={props.path}
        exact={props.exact ? props.exact : false}
        activeStyle={{
          color: '#FF5722',
        }}
        onClick={scrollToServiceSection}
      >
        {props.title}
      </NavLink>
    </div>
  );
}

export default TabMenuItem;
