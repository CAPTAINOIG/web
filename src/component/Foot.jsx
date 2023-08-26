import React from 'react'
import retro from '../assets/images/retro.jpg'
import laptop from '../assets/images/laptop.jpg'
import gaming from '../assets/images/gaming.jpg'





const Foot = () => {
  return (
   <>
        <div id='upp' className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className='d-flex'>
                        <img src={retro} alt="" height={100} width={100} />
                        <div>
                            <p id='two'>01</p>
                            <h3 id='three'>Reviving Retro PCS</h3>
                            <p id='four'>What happens when old PCs <br /> are given modern upgrades?</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className='d-flex'>
                <img src={laptop} alt="" height={100} width={100} />
                <div>
                    <p id='two'>03</p>
                    <h3 id='three'>Top 10 Laptops of 2023</h3>
                    <p id='four'>Our best picks for various <br /> needs and budgets</p>
                </div>
            </div>
                </div>
                <div className="col-lg-4">
                <div className='d-flex'>
                        <img src={gaming} alt="" height={100} width={100} />
                        <div>
                        <p id='two'>03</p>
                        <h3 id='three'>The Growth of Gaming</h3>
                        <p id='four'>How the pandemic has sparked<br /> fresh opportunities </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Foot