import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
        <img src="https://n1s1.hsmedia.ru/8d/9c/6d/8d9c6df839e854073959c01d6e840788/665x495_0xac120003_9754609821562619225.jpg" className={h.logo} alt="logo" />
      </header>
    )
}

export default Header;