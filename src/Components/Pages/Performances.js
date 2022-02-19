import { React, useState } from 'react';
import './Performances.css';
import '../Header'
import Header from '../Header';

function Performances() {
    const [click, setClick] = useState(false);
    const showInfo = () => {
        setClick(!click);
    }

    return <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='button-container first'>
                        <Header />
                        <div className='events-header'>
                            <h1></h1>
                        </div>
                        {click && (<div className='info-container'>
                            <h3 data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Down">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </h3>
                        </div>)}
                        <a href="/" className="custom-button perf" role="button" aria-pressed="true">Performance Link</a>
                        <a className="custom-button know" role="button" aria-pressed="true" onClick={() => showInfo()}>Know The Event</a>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className='button-container second'>
                        <Header />
                        <div className='events-header'>
                            <h1></h1>
                        </div>
                        {click && (<div className='info-container'>
                            <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </h3>
                        </div>)}
                        <a href="/" className="custom-button perf" role="button" aria-pressed="true">Performance Link</a>
                        <a className="custom-button know" role="button" aria-pressed="true" onClick={() => showInfo()}>Know The Event</a>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className='button-container third'>
                        <Header />
                        <div className='events-header'>
                            <h1></h1>
                        </div>
                        {click && (<div className='info-container'>
                            <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </h3>
                        </div>)}
                        <a href="/" className="custom-button perf" role="button" aria-pressed="true">Performance Link</a>
                        <a className="custom-button know" role="button" aria-pressed="true" onClick={() => showInfo()}>Know The Event</a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </>;;
}

export default Performances;
