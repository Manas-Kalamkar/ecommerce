import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router'
import { Button } from '../styles/Button'
import hero from '../assets/images/hero.jpg'
interface PropType{
    myData:string;
}

const HeroSection :React.FC<PropType>= ({myData}) => {
const name : string = myData;
    return (
        <Wrapper>
            <div className="container">

                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome to</p>
                        <h1>{name}</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Duis aute irure do
                            lor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <NavLink to="/products">
                            <Button>Shop now</Button>
                        </NavLink>
                    </div>
                    <div className="hero-section-image">
                        <figure>
                            <img src={hero} alt="hero-section-photo" className='img-style' />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    max-width: 100%;
    height: auto;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
    max-width: 100%;
    overflow: hidden; 

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 0; 

    .grid {
        grid-template-columns: 1fr; 
      gap: 4rem; 
    }

    figure::after {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
`;

export default HeroSection