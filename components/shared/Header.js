import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/projects">
          <a> Projects </a>
        </Link>
        <Link href="/blog">
          <a> Blogs </a>
        </Link>
        <Link href="/resume">
          <a> Resume </a>
        </Link>
      </React.Fragment>
    )
  }
}

export default Header;