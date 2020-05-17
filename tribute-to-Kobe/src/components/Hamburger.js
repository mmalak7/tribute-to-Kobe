import React, { useEffect, useRef } from 'react';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import gsap from 'gsap';

const Hamburger = ({ state }) => {

    const data = useStaticQuery(graphql`
    query {
      kobeMenu: file(relativePath: { eq: "Kobe-menu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      kobeFirst: file(relativePath: { eq: "Kobe-dear-first.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      kobeKid: file(relativePath: { eq: "Kobe-dear-kid.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    //ref dom nodes for animation
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let kobeBackground = useRef(null);

    let menuLinks = useRef(null);
    let moments = useRef(null);

    // const momentsImages = [
    //     { name: 'Dear Basketball', image: data.kobeFirst },
    //     { name: 'Last game', image: data.kobeKid },
    //     { name: 'Kid', image: data.kobeKid }
    // ]


    useEffect(() => {
        if (state.clicked === false) {
            //close menu
            gsap.to([revealMenu, revealMenuBackground], {
                duration: .8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.07,
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: { display: 'none' },
            })

        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)) {
            // open menu
            gsap.to(menu, {
                duration: 0,
                css: { display: 'block' },
            });

            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: '100%'
            });
            staggerReaveal(revealMenuBackground, revealMenu);
            fadeInUp(moments);
            fadeLeftRight(menuLinks);
        }
    }, [state])

    const staggerReaveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        });
    }

    const fadeInUp = (node) => {
        gsap.from(node, {
            y: 60,
            duration: 1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    }

    const fadeLeftRight = (node) => {
        gsap.from([node], {
            x: 60,
            duration: 1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    }


    //not working with Link to in gatsby, but in standard react works (? why ?)
    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: .8,
            y: 100,
            delay: .2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.5
            }
        });
    }

    //it should change the background for other image with smooth effect.
    //yet it needs to have a png image to not affect the diff between backgrounds
    // const handleImages = images => {
    //     gsap.to(kobeBackground, {
    //         duration: 0,
    //         background: `url(${images}) center center`
    //     })
    //     gsap.to(kobeBackground, {
    //         duration: .4,
    //         opacity: 1,
    //         ease: 'power3.inOut',
    //     })
    //     gsap.from(kobeBackground, {
    //         duration: .4,
    //         skewY: 2,
    //         transformOrigin: 'right top'
    //     })
    // }

    // const handleImageReturn = () => {
    //     gsap.to(kobeBackground, {
    //         duration: .4,
    //         opacity: 0,
    //     });
    // };

    return (
        <div ref={el => menu = el} className="hamburger-menu">
            <div ref={el => revealMenuBackground = el} className="menu-second-back-color"></div>
            <div ref={el => revealMenu = el} className="menu-layer">
                <div /*ref={el => kobeBackground = el}*/ className="menu-image-back"></div>
                <div className="container">
                    <div className="wrapper">
                        <div className="kobe-image-hamburger">
                            <Img fluid={data.kobeMenu.childImageSharp.fluid} />
                        </div>
                        <div ref={el => menuLinks = el} className="menu-links">
                            <nav>
                                <ul>
                                    <li >
                                        <Link to='/home' >Home</Link>
                                    </li>
                                    <li >
                                        <Link to='/carrer'>Carrer</Link>
                                    </li>
                                    <li>
                                        <Link to='/awards'>Awards</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="menu-moments">
                            <div ref={el => (moments = el)} className="moments">
                                <span>Dear Basketball</span>
                                <span>Last game</span>
                                <span>Kid Kobe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;