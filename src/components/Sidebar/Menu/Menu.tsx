import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  menu: Array<{
    label: string
    path: string
  }>
}

const Menu = ({ menu }: Props) => (
  <nav>
    <ul>
      {menu.map<React.FC<Props>>((option) => {
        <li key={option.path}>
          <Link
            to={option.path}
          >
            {option.label}
          </Link>
        </li>
      })}
    </ul>
  </nav>
)

export default Menu;