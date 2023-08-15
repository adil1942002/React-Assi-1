import './App.css';

function App() {
  return (
    <div>
      <nav class=" navbar navbar-expand-lg bg-dark sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand text-white fs-3 fw-bold px-5" href="#">DORSIN</a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="text-light"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav my-3">
              <li class="nav-item">
                <a class="nav-link active text-white px-4" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white px-4" aria-current="page" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white px-4" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white px-4" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white px-4" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white px-4" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white px-4" href="#">Contact</a>
              </li>
            </ul>
            <span class="badge rounded-pill text-bg-danger p-3  text-white px-4 ms-auto mx-5">Try it Free</span>
          </div>
        </div>
      </nav>
      <div className='bgHome'>
        <div className='bgHomecolor'>
          <div className='opa'>
            <div className='text-white w-75 mx-auto text-center py-5 pt-5 '>
              <h1 className='display-4 fw-bold pt-5'>We help startups launch their products</h1>
              <p>Etiam se d.Interdum consequat proin vestibulum class at.</p>
              <i class="fa-regular fa-circle-play display-1 text-danger py-3"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='ourServices text-center pt-5'>
        <h3 >OUR SERVICES</h3>
        <h3 className='text-danger fw-bold'>_____</h3>
        <p className='text mx-auto '>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
      </div>
      <div className='ourCards container'>
        <div className='row mx-5 d-flex justify-content-evenly'>
          <div className='col-md-4 text-center'>
            <i class="fa-regular fa-gem p-5 fs-3 text-danger"></i>
            <h4 className='py-3'>Digital Design</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
          <div className='col-md-4  text-center'>
            <i class=" fa-solid fa-desktop p-5 fs-3 text-danger"></i>
            <h4 className='py-3'>Unlimited Colors</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
          <div className='col-md-4  text-center'>
            <i class="fa-solid fa-box-archive p-5 fs-3 text-danger"></i>
            <h4 className='py-3'>Strategy Solutions</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
          <div className='col-md-4  text-center'>
            <i class=" fa-solid fa-desktop p-5 fs-3 text-danger"></i>
            <h4 className='py-3'>Digital Design</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
          <div className='col-md-4  text-center'>
            <i class="fa-regular fa-gem p-5 fs-3 text-danger"></i>
            <h4 className='py-3'>Digital Design</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
          <div className='col-md-4  text-center'>
            <i class=" fa-solid fa-desktop p-5 fs-3 text-danger"></i>
            <h4 className='py-3'>Digital Design</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row mx-md-5 mx-2 mt-5'>
          <div className='col-md-5'>
            <h3>A digital web design studio creating modern & engaging online experiences</h3>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <ul className='ul'>
              <li>We put a lot of effort in design.</li>
              <li>The most important ingredient of successful website.</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li>Submit Your Organization.</li>
            </ul>
            <button type="button" class="btn btn-danger">Leran more </button>
          </div>
          <div className='col-md-7'>
            <img src='http://dorsin.react.themesbrand.com/assets/images/online-world.svg' width="80%" />
          </div>
        </div>
      </div>
      <div className='bgimg'>
        <div className='bgimgcolor containt'>
          <div className='containtAbso text-center text-white mx-5 pt-5'>
            <h3 className='py-2'>Build your dream website today</h3>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
            <button type="button" class="btn btn-light fw-bold">View Plan & Pricing </button>
          </div>
        </div>
      </div>
      <div className='ourServices text-center py-5'>
        <h3 >OUR PRICING</h3>
        <h3 className='text-danger fw-bold'>_____</h3>
        <p className='text mx-auto mb-5'>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div class="card  text-center">
              <div className='card-header py-5'>
                <h5>ECONOMY</h5>
                <h2>$9.90</h2>
                <h5>BILLING PER MONTH
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text ">Bandwidth:<span className='text-danger'>1GB</span></p>
                <p class="card-text ">Onlinespace<span className='text-danger'>50MB</span></p>
                <p class="card-text ">Support: <span className='text-danger'>NO</span></p>
                <p class="card-text text-danger">1 <span className='text-dark'>Domain</span></p>
                <p class="card-text text-danger">NO <span className='text-dark'>Hidden Fees</span></p>
                <a href="#" class="btn btn-danger my-5">Join Now</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card  text-center">
              <div className='card-header py-5'>
                <h5>ECONOMY</h5>
                <h2>$9.90</h2>
                <h5>BILLING PER MONTH
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text ">Bandwidth:<span className='text-danger'>1GB</span></p>
                <p class="card-text ">Onlinespace<span className='text-danger'>50MB</span></p>
                <p class="card-text ">Support: <span className='text-danger'>NO</span></p>
                <p class="card-text text-danger">1 <span className='text-dark'>Domain</span></p>
                <p class="card-text text-danger">NO <span className='text-dark'>Hidden Fees</span></p>
                <a href="#" class="btn btn-danger my-5">Join Now</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card  text-center">
              <div className='card-header py-5'>
                <h5>ECONOMY</h5>
                <h2>$9.90</h2>
                <h5>BILLING PER MONTH
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text ">Bandwidth:<span className='text-danger'>1GB</span></p>
                <p class="card-text ">Onlinespace<span className='text-danger'>50MB</span></p>
                <p class="card-text ">Support: <span className='text-danger'>NO</span></p>
                <p class="card-text text-danger">1 <span className='text-dark'>Domain</span></p>
                <p class="card-text text-danger">NO <span className='text-dark'>Hidden Fees</span></p>
                <a href="#" class="btn btn-danger my-5">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ourServices text-center pt-5'>
        <h3 >BEHIND THE PEOPLE</h3>
        <h3 className='text-danger fw-bold'>_____</h3>
        <p className='text mx-auto '>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout. team Frank Johnson</p>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-2'>
            <div className='text-center  border my-5'>
              <img src='http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg' width="100%" />
              <h4>Frank Johnson</h4>
              <h5>CEO</h5>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center  border my-5'>
              <img src='http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg' width="100%" />
              <h4>Elaine Stclair</h4>
              <h5>DESIGNER</h5>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center  border my-5'>
              <img src='http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg' width="100%" />
              <h4>Wanda Arthur</h4>
              <h5>DEVELOPER</h5>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center  border my-5'>
              <img src='http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg' width="100%" />
              <h4>Joshua Stemple</h4>
              <h5>MANAGER</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='ourServices text-center pt-5'>
        <h3>WORK PROCESS</h3>
        <h3 className='text-danger fw-bold'>_____</h3>
        <p className='text mx-auto '>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the Proin vitae ipsum vel ex finibus semper design starts.</p>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-3'>
            <div className='text-center  py-md-5 my-md-5'>
              <i class="fa-solid fa-pen-fancy text-danger fs-2 py-5"></i>
              <h4>Tell us what you need</h4>
              <h5>The Big Oxmox advised her not to do so</h5>
            </div>
          </div>
          <div className='col-md-1  none my-5 py-5'>
            <div className='my-5 py-2  text-center round bg-danger'>

              <i class="fa-solid fa-greater-than text-light fs-3 "></i></div>
          </div>
          <div className='col-md-2'>
            <div className='text-center py-md-5 my-md-5'>
              <i class="fa-solid fa-address-card text-danger fs-2 py-5"></i>
              <h4>Joshua Stemple</h4>
              <h5>MANAGER</h5>
            </div>
          </div>
          <div className='col-md-1 none  my-5 py-5'>
            <div className='my-5 py-2  text-center round bg-danger'>

            <i class="fa-solid fa-greater-than text-light fs-3 "></i></div>
            </div>
          <div className='col-md-2'>
            <div className='text-center  py-md-5 my-md-5'>
              <i class="fa-brands fa-gg text-danger fs-1 py-5"></i>
              <h5>The Big Oxmox advised her not to do so</h5>
            </div>
          </div>

          <a href="#" class="btn btn-danger my-5 w-50">Get Started  <i class="fa-solid fa-greater-than"></i> </a>
        </div>
      </div>
    </div>
  );
}

export default App;




