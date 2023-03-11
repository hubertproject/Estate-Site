import React from 'react'
import './Home.css'
 
function Home() {
  return (
    <div>
      <section className='Hero-section'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1357625017/photo/shot-of-a-young-family-enjoying-a-meal-together.jpg?b=1&s=170667a&w=0&k=20&c=qFFJBmw2azu3aniSN7HIwDIR3rmGFIRcpAoJzAj37gU=" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1272128530/photo/home-with-blue-siding-and-stone-fa%C3%A7ade-on-base-of-home.jpg?b=1&s=170667a&w=0&k=20&c=vdpWpslhj_oGFrLxbQ1N0nNmGj_gU-2qbfUSpdArziU=" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1272163106/photo/large-house-with-steep-roof-and-side-entry-three-car-garage.jpg?b=1&s=170667a&w=0&k=20&c=KeRhxIpGx0MZakssoHIVmbEbvp5gNdjxYaxyBWDlu5Y=" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
    
    <section className='featured-post container pt-2'>
    <h3 className='text-center text-uppercase py-4'> Featured Post</h3> 
    
    <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-12'>
      <div className="card">
      <img src="https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?b=1&s=170667a&w=0&k=20&c=g2W2k7VFWMrreuPjL_JX7B8Ztswk0Ag9Wf8tkU4poDA=" className="card-img-top" alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
        </div>
        
      </div>
      
    </div>

      </div>
      <div className='col-lg-4 col-md-4 col-sm-12'>
      <div className="card">
      <img src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=" className="card-img-top" alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
        </div>
      </div>
      
    </div>

      </div>
      <div className='col-lg-4 col-md-4 col-sm-12'>
      <div className="card">
      <img src="https://media.istockphoto.com/id/1396858846/photo/american-traditional-colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=QegK9brcDlD7ZSo20c_RAkw7R2pqYYJlgRo0HuMzzjk=" className="card-img-top" alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
        </div>
      </div>
      
    </div>

      </div>
    </div>
   
    </section>
    <section className='latest-post container pt-2'>
    <h3 className='text-center text-uppercase py-4'> Latest Post</h3>
    <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-12'>
      <div className="card">
      <img src="https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?b=1&s=170667a&w=0&k=20&c=g2W2k7VFWMrreuPjL_JX7B8Ztswk0Ag9Wf8tkU4poDA=" className="card-img-top" alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
        </div>
        
      </div>
      
    </div>

      </div>
      <div className='col-lg-4 col-md-4 col-sm-12'>
      <div className="card">
      <img src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=" className="card-img-top" alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
        </div>
      </div>
      
    </div>

      </div>
      <div className='col-lg-4 col-md-4 col-sm-12'>
      <div className="card">
      <img src="https://media.istockphoto.com/id/1396858846/photo/american-traditional-colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=QegK9brcDlD7ZSo20c_RAkw7R2pqYYJlgRo0HuMzzjk=" className="card-img-top" alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
        </div>
      </div>
      
    </div>

      </div>
    </div>
    
    
    </section>
    <section className='d-flex flex-column justify-content-center container-fluid bg-primary bg-gradient mt-4' style={{minHeight: "150px"}}>
    <h3 className="text-white text-uppercase">We have wide variety of post</h3>
    <button className="btn btn-warning">View Post</button>

</section>
    <section className='our-portfolio container'>
    <h3 className='text-center text-uppercase py-4'>Our Portfolio</h3>
    <div className="container">
  <div className="row g-2">
    <div className="col-6">
      <div className="p-1 border bg-light"> <img src="https://media.istockphoto.com/id/1396858846/photo/american-traditional-colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=QegK9brcDlD7ZSo20c_RAkw7R2pqYYJlgRo0HuMzzjk=" className="card-img-top" alt=".." />
</div>
    </div>
    <div className="col-6">
      <div className="p-1 border bg-light"> 
      <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt=".." /></div>
    </div>
    <div className="col-6">
      <div className="p-1 border bg-light">
      <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt=".." />
      </div>
    </div>
    <div className="col-6">
      <div className="p-1 border bg-light">
      <img src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt=".." />
      </div>
    </div>
  </div>
</div>
    </section>
    
    </div>
  )
}

export default Home