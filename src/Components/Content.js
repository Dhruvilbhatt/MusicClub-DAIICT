import { React, useState } from 'react';
import './Content.css';
import Footer from './Footer'
import Cards from './Cards'

function Content() {
    const [about, setAbout] = useState(false);
    const showAbout = () => {
        setAbout(!about);
    }

    return <>
        <div className='container'>
            <div className='source-container'>
                <h1>
                    <span className="multicolortext">MUSIC CLUB @ DA-IICT</span>
                </h1>
                {about && (<div className='info-container'>
                    <h3 data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Down">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </h3>
                </div>)}
            </div>
            <a className="custom-button-about" role="button" aria-pressed="true" onClick={() => showAbout()}>About Us</a>
        </div>
    </>;
}

export default Content;
