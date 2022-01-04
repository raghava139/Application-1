import React from 'react'
import About from './About'
import ContactUs from './Contactus'
import Footer from './Footer'
import Products from './Products'

function Home() {
    return (
        <div className="myRow">
            {/* <div class="card bg-dark text-white">
                <img src="https://images.picxy.com/cache/2020/9/1/7fb42f02575ae25c3bb60b176f8d964f.jpg" class="card-img" alt="Shopping Image"/>
                <div class="card-img-overlay">
                    <h5 class="card-title fw-bold fs-4 text-dark text-center">Magical Shopping</h5>
                    <p class="card-text text-dark text-center">Happiness is not in money, but in shopping.</p>
                </div>
                </div> */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://dlq00ggnjruqn.cloudfront.net/prometheus/getImage?id=322298" className="d-block w-100" alt="shopping-1"/>
    </div>
    <div className="carousel-item">
      <img src="https://www.infosys.com/content/dam/infosys-web/en/home/images/truly-strategic-partner.jpg" className="d-block w-100" alt="shopping-2"/>
    </div>
    <div className="carousel-item">
      <img src="https://www.freegreatpicture.com/files/75/24517-hd-women-shopping.jpg" className="d-block w-100" alt="shopping-3"/>
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
                <Products/>
                <About/>
                <ContactUs/>
                <Footer/>
        </div>
    )
}

export default Home
