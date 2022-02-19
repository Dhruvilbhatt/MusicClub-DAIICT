import React from 'react';
import './Cards.css'
import Footer from './Footer'

function Cards() {
    return (
        <>
            {/* <br /> */}
            <div className='container cards'>
                <div className="row">
                    <div className="column ff">
                        <a href='/members'>
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_3.jpg" alt="Card ff" />
                                <div className="card-body">
                                    <h2 className="card-text">MEMBERS</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="column ff">
                        <a href='/performances'>
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_4.jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h2 className="card-text">PERFORMANCES</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="column ff">
                        <a href='/achievements'>
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_6.jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h2 className="card-text">HALL OF FAME</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Cards;
