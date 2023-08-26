import React from 'react'
import desktop from '../assets/images/desktop.jpg'
import { Link } from 'react-router-dom'


const Middle = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <img className='img' src={desktop} alt="" />
                    
                    <div className='d-flex'>
                    <div>
                    <h1 id='right'>The Bright <br /> Future Of <br /> Web 3.0</h1>
                    </div>
                
                    <div id='dive'>
                            <p>We dive into the next evolution of the web that <br /> claims to put the power of the platform back <br /> into the hand of the people. But is it really <br /> fulfilling its promise?</p>
                            <Link className='read text-decoration-none' to="">READ MORE</Link>
                    </div>
                </div>

                </div>

                <div id='hall' className="col-lg-4 mt-5">
                <div>
                    <h3 id='new'>New</h3>
                    <span id='hydroge'>Hydrogen Vs Electric cars</span> <br />
                    <span id='will'>Will hydrogen-fueled cars ever catch up <br /> to EVs?</span>
                    <p id='pi'>_____________________________</p>
                </div>
                <div>
                    <h3 id='the'>The Downside of AI Artistry</h3>
                    <p id='will'>What are the possible adverse effects of <br /> on-demand AI image generation?</p>
                    <p id='pi'>_____________________________</p>
                </div>
                <div>
                    <h3 id='is'>Is VC Funding Drying Up?</h3>
                    <p id='will'>Private funding by VC firms is down 50% <br /> YOY. we take a look at what that means</p>
                    <p id='pi'>_____________________________</p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Middle