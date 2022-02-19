import React from 'react';
import './Members.css';
import Footer from '../Footer'
import Header from '../Header'

function Members() {
    return (<div>
        <div className='container-members'>
            <div className='source-container-members'>
                <Header />
                <>
                    <div className='container-core'>
                        <h1>Meet the Music Club Members</h1>
                    </div>
                    <div className="row core">
                        <div className="column core-ff">
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_2.jpg" alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column core-ff">
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_3.jpg" alt="Card ff" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column core-ff">
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_4.jpg" alt="Card ff" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row core">
                        <div className="column core-se">
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_5.jpg" alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column core-se">
                            <div className="card" >
                                <img className="card-img-top" src="/photos/photo_6.jpg" alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
            <Footer />
        </div>
    </div>);
}

export default Members;
