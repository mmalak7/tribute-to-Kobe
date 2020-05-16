import React from 'react';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Hamburger = () => {

    const data = useStaticQuery(graphql`
    query {
      kobeMenu: file(relativePath: { eq: "Kobe-menu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div>
            <div className="hamburger-menu">
                <div className="menu-second-back-color"></div>
                <div className="menu-layer">
                    <div className="menu-image-back"></div>
                    <div className="container">
                        <div className="wrapper">
                            <div className="kobe-image-hamburger">
                                <Img fluid={data.kobeMenu.childImageSharp.fluid} />
                            </div>
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to='/home'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/carrer'>Carrer</Link>
                                        </li>
                                        <li>
                                            <Link to='/awards'>Awards</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="menu-moments">
                                <div className="moments">
                                    <span>Dear Basketball</span>
                                    <span>Last game</span>
                                    <span>Something</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;