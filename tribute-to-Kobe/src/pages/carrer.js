import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../components/header';


const Carrer = () => {
  const data = useStaticQuery(graphql`
    query {
      kobeCarrer: file(relativePath: { eq: "Kobe-carrer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lakersNumber: file(relativePath: { eq: "lakers-number.png" }) {
        childImageSharp {
          fluid(maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className='carrer'>
        <div className="container">
          <div className="kobe-image-carrier">
            <Img fluid={data.kobeCarrer.childImageSharp.fluid} />
          </div>
          <div className="carrer-stats">
            <div className='stats'>Carrer statistic</div>
            <div className='ppg'>Points <span>33,643 </span> (25.0 ppg)</div>
            <div className='rpg'>Rebounds <span> 7,047 </span> (5.2 rpg)</div>
            <div className='apg'>Assists <span> 6,306 </span> (4.7 rpg)</div>
            <div className="lakers-number">
              <Img fluid={data.lakersNumber.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrer;