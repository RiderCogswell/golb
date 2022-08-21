import React from 'react';

import { Link } from 'react-router-dom';

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  }
}

const Author = ({  author }: Props) => (
  <div>
    <Link to='/'>
      <img alt={author.name} src='author.photo' />
    </Link>
  </div>
);

export default Author;