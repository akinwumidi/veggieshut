import React, { useRef, useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import '../../styles/header.scss'
import logo from '../../assets/images/veggiesHutlogo.svg'
import { NavLink, Link } from 'react-router-dom'
import { RiUser6Line, RiMenuLine, RiShoppingBag3Line } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'

import { cartUiActions } from '../../store/shopping-cart/cartUislice'

const nav__links = [
  { display: 'Home', path: '/home' },
  { display: 'Foods', path: '/allfoods' },
  { display: 'Cart', path: '/cart' },
  { display: 'Contact', path: '/contact' },
]

const Header = () => {
  const menuRef = useRef(null)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  const [navbarScrolled, setNavbarScrolled] = useState(false)

  // {
  // const stickyHeaderRef = useRef(null)
  // <div className='header' useRef={stickyHeaderRef} >

  //   if (
  //     document.body.scrollTop > 80 ||
  //     document.documentElement.scrollTop > 80
  //   ) {
  //     stickyHeaderRef.current.classList.add('header__shrink')
  //   } else {
  //     // stickyHeaderRef.current.classList.contains('header__shrink')?:''
  //     // stickyHeaderRef.current.classList.toggle('header__shrink')
  //     stickyHeaderRef.current.classList.add('header__shrink')
  //     stickyHeaderRef.current.classList.remove('header__shrink')
  //   }
  // }

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  const handleNavBarScroll = () => {
    const windowOffset = window.scrollY
    windowOffset > 10 ? setNavbarScrolled(true) : setNavbarScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavBarScroll)

    return () => window.removeEventListener('scroll', handleNavBarScroll)
  }, [navbarScrolled])

  return (
    <div className={`${navbarScrolled ? 'header__shrink' : ''} header`}>
      <Container>
        <div className="nav__wrapper d-flex justify-content-between align-items-center">
          <div className="logo__container  ">
            <div className="logo ">
              <img src={logo} alt="logo" />
            </div>
            <span className="logo___name">
              Veggies<span className="logo__name-spice"> Hut</span>
            </span>
          </div>

          {/* =============  Menu  ============== */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? 'active__menu' : ''
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* =============  Menu  ============== */}
          {/* =============  Nav Right Icons  ============== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <RiShoppingBag3Line />
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <RiUser6Line />
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <RiMenuLine />
            </span>
          </div>
          {/* =============  Nav Right Icons  ============== */}
        </div>
      </Container>
    </div>
  )
}

export default Header
