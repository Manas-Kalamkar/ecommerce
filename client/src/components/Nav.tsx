import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router'
import { FaCartPlus } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../context/CartContext';


const Nav: React.FC = () => {

  const { total_item } = useCartContext();

  const [menuIcon, setMenuIcon] = useState(false)
    return(
    <NavWrapper>
      <div className={menuIcon ? "active navbar" : "navbar"}>
        <ul className="navbar-lists">
          <li>

            <NavLink onClick={() => setMenuIcon(false)} className="navbar-link " to="/">
              Home
            </NavLink>
          </li>
          <li>

            <NavLink onClick={() => setMenuIcon(false)} className="navbar-link " to="/about">
              About
            </NavLink>
          </li>
          <li>

            <NavLink onClick={() => setMenuIcon(false)} className="navbar-link " to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuIcon(false)} className="navbar-link " to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuIcon(false)} className="navbar-link cart-trolley--link" to="/cart">
              <FaCartPlus className='cart-trolley' />
              <span className='cart-total--item' style={{ display: total_item > 0 ? "grid" : "none" }}>{total_item > 0 ? total_item : ""}</span>
            </NavLink>
          </li>

          {/* two button for open and close */}
        </ul>
      </div>
      <div className={menuIcon ? "mobile-navbar-btn active" : "mobile-navbar-btn"}>
        <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={() => setMenuIcon(false)} />
        <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={() => setMenuIcon(true)} />
      </div>
    </NavWrapper >
  )
}

const NavWrapper = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background: transparent;
      cursor: pointer;
      border: none;
      font-size:3.2rem;
    }


    .close-outline {
      display:none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {

      .navbar {
        position: relative;
      }

    

      .navbar-lists {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        transform: translateX(100%);
        transition: transform 0.01s ease-in-out;

        .navbar-link  {
            &:link,
            &:visited {
              font-size: 3.2rem;   /* mobile font size */
              font-weight:600
            }
          }
            
        
          
        .cart-trolley--link {
          position: relative;

          .cart-trolley {
            position: relative;
            font-size: 4rem;
          }

          .cart-total--item {
          font-size:2.5rem;
            width: 3.4rem;
            height: 3.4rem;
            position: absolute;
            background-color: #000;
            color: #000;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top: -30%;
            left: 70%;
            background-color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
          .active .close-outline{
          display:inline;
          position:fixed;
          z-index:9999
          }

          .active .navbar-lists {
            transform: translateX(0);
            z-index: 999;
          }

          .mobile-navbar-btn {
            display: inline-block;
            z-index: 1000;
          }

    }

`;

export default Nav;