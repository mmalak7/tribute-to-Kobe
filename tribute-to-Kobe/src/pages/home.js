import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../components/header';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      kobeHome: file(relativePath: { eq: "Kobe-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Header />
      <div className='home'>
        <div className="container">
          <div className="kobe-image-home">
            <Img fluid={data.kobeHome.childImageSharp.fluid} />
          </div>
          <div className="quote-home">
            "The most important thing is
                    to <span>try</span> and <span>inspire</span> people so
                    that they can <span>be great</span> in
                    <span> whatever</span> they want to do."
                </div>
        </div>
      </div>
    </>
  );
};

export default Home;