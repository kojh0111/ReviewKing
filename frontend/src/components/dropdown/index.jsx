// import React, { useState } from 'react';
// import './index.scss';
// import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
// import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

// import KoreanName from '../../const/koreanName';
// import ChineseName from '../../const/chineseName';
// import JapaneseName from '../../const/japaneseName';
// import WesternName from '../../const/westernName';

// export default function DropDown() {
//   return (
//     <DropDownbar>
//       <DropDownBarItem icon={<CaretIcon />}>
//         <DropdownMenu />
//       </DropDownBarItem>
//     </DropDownbar>
//   );
// }

// function DropDownbar(props) {
//   return (
//     <nav className="dropdownbar">
//       <ul className="dropdownbar-nav">{props.children}</ul>
//     </nav>
//   );
// }

// function DropDownBarItem(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className="dropdownbar-item">
//       <a className="icon-button" onClick={() => setOpen(!open)}>
//         {props.icon}
//       </a>

//       {open && props.children}
//     </li>
//   );
// }

// function DropdownMenu() {
//   const [activeMenu, setActiveMenu] = useState('main');
//   const [menuHeight, setMenuHeight] = useState(null);

//   // 메뉴(dropdown) 높이 자동 계산
//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height);
//   }

//   function DropdownItem(props) {
//     return (
//       <a
//         className="menus-item"
//         onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
//       >
//         <span className="icon-button">{props.leftIcon}</span>
//         {props.children}
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   }

//   return (
//     <div className="dropdown" style={{ height: menuHeight }}>
//       {/* 대분류 */}

//       <CSSTransition
//         in={activeMenu === 'main'}
//         timeout={500}
//         classNames="menu-primary"
//         unmountOnExit
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropdownItem
//             leftIcon="🍚 "
//             rightIcon={<ChevronIcon />}
//             goToMenu="korean"
//           >
//             한식
//           </DropdownItem>

//           <DropdownItem
//             leftIcon="🥡 "
//             rightIcon={<ChevronIcon />}
//             goToMenu="chinese"
//           >
//             중식
//           </DropdownItem>

//           <DropdownItem
//             leftIcon="🍣"
//             rightIcon={<ChevronIcon />}
//             goToMenu="japanese"
//           >
//             일식
//           </DropdownItem>

//           <DropdownItem
//             leftIcon="🫕 "
//             rightIcon={<ChevronIcon />}
//             goToMenu="western"
//           >
//             양식
//           </DropdownItem>
//         </div>
//       </CSSTransition>

//       {/* 소분류 */}

//       <CSSTransition
//         in={activeMenu === 'korean'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>한식</h2>
//           </DropdownItem>

//           {KoreanName.map(option => (
//             <DropdownItem leftIcon="🍚">{option}</DropdownItem>
//           ))}
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'chinese'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>중식</h2>
//           </DropdownItem>

//           {ChineseName.map(option => (
//             <DropdownItem leftIcon="🥡">{option}</DropdownItem>
//           ))}
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'japanese'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>일식</h2>
//           </DropdownItem>

//           {JapaneseName.map(option => (
//             <DropdownItem leftIcon="🍣">{option}</DropdownItem>
//           ))}
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'western'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>양식</h2>
//           </DropdownItem>

//           {WesternName.map(option => (
//             <DropdownItem leftIcon="🫕">{option}</DropdownItem>
//           ))}
//         </div>
//       </CSSTransition>
//     </div>
//   );
// }
