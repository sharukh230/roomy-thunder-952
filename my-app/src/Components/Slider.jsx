import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {  
    return (

        <div style={{ display: 'block', width: 700, padding: 60, margin:"auto" }}>
            <h6>Home > HealthCare</h6>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/79c73041650-Centrumm.jpg?dim=700x0&dpr=1&q=100"
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/0546085c3c6-Softovac.jpg"
                        alt="Image Two"
                    />
                    
             
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/4600109971c-OneTouchSPS-CB-Sep22-min.png"
                        alt="Image Two"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/21ddc1b9f25-hairr.jpg"
                        alt="Image Two"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/df29c329f51-Huggies.jpg"
                        alt="Image Two"
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/c4432d461ec-Mintop.jpg"
                        alt="Image Two"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/9e0c8cc9a56-Venusiaa.jpg"
                        alt="Image Two"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/1229593baf0-Godrej.jpg"
                        alt="Image Two"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/a8c80c13891-SENQUEL.jpg"
                        alt="Image Two"
                    />
                 
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/612f14cb340-DEPIWHITE.jpg"
                        alt="Image Two"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/447598d4bad-Omez.jpg"
                        alt="Image Two"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cms-contents.pharmeasy.in/banner/6b42d7a1f1d-Keterol.jpg"
                        alt="Image Two"
                    />
                
                </Carousel.Item>
            </Carousel>


        </div>
    )
}

export default Slider