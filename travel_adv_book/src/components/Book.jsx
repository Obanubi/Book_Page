import React from 'react'
import './book.css'

const Book = () => {
    return (
        <div className='book-section'>
            <div>
                <div className="header">
                    <h2 id='head-title'>Book Your Next Trip in 3 Easy Steps</h2>
                    <p>Easy and Fast</p>
                </div>
                <div className="body-section">
                    <div className="book-flight">
                        <div className="first-part">
                            <img id='icon' src="./src/assets/img-1.png" alt="" />
                            <div className='text'>
                                <h4>Choose Destination</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi?</p>
                            </div>
                        </div>

                        <div className="second-part">
                            <img id='icon' src="./src/assets/img-2.png" alt="" />
                            <div className='text'>
                                <h5>Make Payment</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi?</p>
                            </div>
                        </div>

                        <div className="third-part">
                            <img id='icon' src="./src/assets/img-3.png" alt="" />
                            <div className='text'>
                                <h5>Reach Airport on Selected Date</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi?</p>
                            </div>
                        </div>
                    </div>



                    <div className="card">
                        <img src="./src/assets/image.png" alt="" />
                        {/* <div className='footer-img'>
                                <img id='f-img' src="./src/assets/person.jpg" alt="" />
                            </div>
                            <div className='footer-text'>
                                <h4>Trip to Greece</h4>
                                <p>14-29 June | by Robbin</p>
                            </div>
                                <div className="logos">
                                    <img src="./src/assets/map_icon_1.png" alt="" />
                                    <img src="./src/assets/map_icon_2.png" alt="" />
                                    <img src="./src/assets/map_icon_3.png" alt="" />
                                </div>
                                <div className='card-footer' >
                                    <div className='img-1'>
                                        <img src="./src/assets/building.png" alt="" />
                                        <p>24 people going</p>
                                    </div>
                                    <div className='img-2'>
                                        <img id='heart' src="./src/assets/heart.png" alt="" />
                                    </div>
                                </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book
