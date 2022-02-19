import React from 'react';
import './Achievements.css';
import Header from '../Header';
import Footer from '../Footer';

function Achievements() {
    return (<div className="u-body u-xl-mode">
        <Header />
        <section className="u-clearfix u-image u-section-1" id="carousel_ddac">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h1 className="u-hover-feature u-text u-text-body-alt-color u-title u-text-1" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Down">ACHIEVEMENTS</h1>
            </div>
        </section>
        <section className="u-clearfix u-section-2" id="carousel_6fb9">
            <div className="u-expanded-height u-palette-1-light-2 u-shape u-shape-rectangle u-shape-1"></div>
            <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                    <div className="u-layout-row">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-18 u-layout-cell-1">
                            <div className="u-container-layout u-valign-middle u-container-layout-1">
                                <p className="u-text u-text-1">“I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?” </p>
                            </div>
                        </div>
                        <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-42 u-layout-cell-2">
                            <div className="u-container-layout u-valign-top u-container-layout-2">
                                <img src="/photos/Untitled61.jpg" alt="" className="u-expanded-width u-image u-image-default u-image-1" />
                                {/* <h1 className="u-text u-text-2">The former Beatle opens up about the band's split</h1> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="u-align-center u-clearfix u-image u-section-3" id="carousel_300d" data-image-width="1600" data-image-height="978">
            <div className="u-clearfix u-sheet u-sheet-1">
                <img src="/photos/Untitled61.jpg" alt="" className="u-image u-image-default u-image-1" />
                <p className="u-align-center u-text u-text-body-alt-color u-text-1">“I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?” </p>
            </div>
        </section>
        <Footer />
    </div>);
}

export default Achievements;
