import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../components/header';

const Awards = () => {
  const data = useStaticQuery(graphql`
    query {
      kobeCarrer: file(relativePath: { eq: "Kobe-awards.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className='awards'>
        <div className="container">
          <div className="kobe-image-awards">
            <Img fluid={data.kobeCarrer.childImageSharp.fluid} />
          </div>
          <div className="carrer-awards">
            <div className='champ'>Carrer statistic</div>
            <div className='mvp'>Points <span>33,643 </span> (25.0 ppg)</div>
            <div className='star'>Rebounds <span> 7,047 </span> (5.2 rpg)</div>
            <div className='scor-champ'>Assists <span> 6,306 </span> (4.7 rpg)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;