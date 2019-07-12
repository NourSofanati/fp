import React from 'react';
import './App.css';


class Project {
  constructor(id, title, description, link, background) {
    this.state = {
      id,
      title,
      description,
      link,
      background
    }
  }
}

var projs = [];
var lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iusto facere harum sed, molestias est magnam facilis quos nemo delectus fugit repellat saepe at quo esse nostrum mollitia, reprehenderit illum ullam voluptatum enim similique quasi recusandae? Placeat eaque voluptate temporibus, fuga laudantium dolore illo voluptatem rerum alias modi amet? Quaerat?';
for (let i = 0; i < 25; i++) {
  projs.push(new Project(i, `My music project ${i}`, lorem, `https://example.com`, null));
}


class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="front">
          <img src="./Capture.PNG" alt=""></img>
        </div>
        <div className="back">
          <div className="back-content middle">
            <h2>{this.props.title}</h2>
            <span>
              <p>
                {this.props.description}
              </p>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 5
    }
    this.onLoadMore.bind(this);
  }

  onLoadMore = () => {
    this.setState({
      limit: this.state.limit + 5
    })
  }

  render() {
    return (
      <span>
        <div className="projects-grid">
          {
            this.props.projs.slice(0, this.state.limit).map((proj, index) => {
              return <PortfolioItem key={index} id={index} title={`My project title ${index}`} description={lorem} link={proj.link} background={proj.background}></PortfolioItem>
            })
          }
        </div>
        <button className="clear" onClick={this.onLoadMore}>Load more</button>
      </span>
    )
  }
}
function App() {
  return (
    <div className="app">
      <div className="intro" id="home">
        <div className="navbar" id="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="introductionText">
          <h1>
            Welcome
          </h1>
          <p>
            My muse it's stronger than the bass in your car
          </p>
        </div>
      </div>
      <div className="CTA">
        <h3>
          Check out my life and music!
        </h3>
        <div className="icons">
          <img src="soundcloud.svg" alt="soundcloudLogo" />
          <img src="instagram.svg" alt="instagramLogo" />
          <img src="facebook.svg" alt="facebookLogo" />
        </div>
      </div>
      <div className="about" id="about">
        <div>
          <h1>About me<hr></hr></h1>
          <span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi rem eveniet esse maxime, facilis illum dolor tempore porro voluptas expedita veniam! Perspiciatis, excepturi at iste ipsa dolorem non. Cumque recusandae ullam animi voluptates voluptate iusto architecto minima ducimus? Possimus quo velit amet blanditiis labore beatae eos porro. Officiis, fugiat?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi rem eveniet esse maxime, facilis illum dolor tempore porro voluptas expedita veniam! Perspiciatis, excepturi at iste ipsa dolorem non. Cumque recusandae ullam animi voluptates voluptate iusto architecto minima ducimus? Possimus quo velit amet blanditiis labore beatae eos porro. Officiis, fugiat?</p>
          </span>
          <button>Download portfolio</button>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>My projects</h1>
        <hr></hr>
        <Portfolio projs={projs}></Portfolio>
      </div>
      <div className="producing" >
        <h1>How i produce music</h1>
        <div className="cards">
          <div className="card">
            <img src="tune.svg" alt="" />
            <h3>Produce</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, asperiores? Porro sint eaque doloremque blanditiis similique molestias at obcaecati possimus?</p>
          </div>
          <div className="card">
            <img src="tune.svg" alt="" />
            <h3>Mix</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid quibusdam repudiandae corrupti, consequatur quas fugit fuga necessitatibus libero saepe.</p>
          </div>
          <div className="card">
            <img src="tune.svg" alt="" />
            <h3>Equalize</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit sed culpa dicta repudiandae maxime, quisquam aliquid neque soluta dolorum.</p>
          </div>
        </div>
      </div>
      <div className="reviews">
        <img src="https://cdn2.hercampus.com/hero-images/2019/01/09/matt-botsford-197870-unsplash.jpg" alt="" />
        <div className="review">
          <button id="leftBtn">&lt;</button>
          <button id="rightBtn">&gt;</button>
          <span><img src="quote.svg" alt="quote" />
            <h3>Audiances review</h3></span>
          <div id="the-reviews">
            <p><i >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea tenetur in itaque aut deserunt ullam iure sit et consequatur quae corporis, accusamus repudiandae, dolores quibusdam iste error nesciunt quam sint. Deserunt eos facilis consectetur voluptatum quaerat architecto blanditiis! Aspernatur veniam ea dolore necessitatibus quisquam facilis quia veritatis. Incidunt laborum aliquid eveniet eligendi quisquam impedit dolores, totam eum sunt. Doloribus, cum eius aspernatur voluptas eaque illum ea delectus dignissimos voluptate iusto vitae fugiat repellat et a vero!</i></p>
            <small>John doe</small>
          </div>
        </div>
      </div>
      <div className="portfolio" id="portfolio">
        <div className="portfoliocontainer">
          <span>
            <h1>Portfolio</h1></span>
          <hr />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eos impedit voluptas porro, consectetur laudantium commodi rem officiis velit quae? Impedit modi consequatur consectetur porro voluptatibus aut odio, maiores laboriosam possimus mollitia dolore, asperiores tempore voluptatum architecto iusto veritatis sint?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eos impedit voluptas porro, consectetur laudantium commodi rem officiis velit quae? Impedit modi consequatur consectetur porro voluptatibus aut odio, maiores laboriosam possimus mollitia dolore, asperiores tempore voluptatum architecto iusto veritatis sint?</p>
          <button className="clear">Download portfolio</button>
          <div className="timeline">
            <div className="timestamp">
              <div className="circle">
                <div className="topCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>01.08.2017 - 20.07.2017</p>
                </div>
                <div className="bottomCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>
                    <a href="#">
                      🔗
                    </a>
                  </p>
                </div>
              </div>
              <p>2015</p>
            </div>
            <div className="timestamp">
              <div className="circle">

                <div className="topCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>01.08.2017 - 20.07.2017</p>
                </div>
                <div className="bottomCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>
                    <a href="#">
                      🔗
                    </a>
                  </p>
                </div>
              </div>
              <p>2016</p>
            </div>
            <div className="timestamp">
              <div className="circle">

                <div className="topCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>01.08.2017 - 20.07.2017</p>
                </div>
                <div className="bottomCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>
                    <a href="#">
                      🔗
                    </a>
                  </p>
                </div>
              </div>
              <p>2017</p>
            </div>
            <div className="timestamp">
              <div className="circle">

                <div className="topCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>01.08.2017 - 20.07.2017</p>
                </div>
                <div className="bottomCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>
                    <a href="#">
                      🔗
                    </a>
                  </p>
                </div>
              </div>
              <p>2018</p>
            </div>
            <div className="timestamp">
              <div className="circle">

                <div className="topCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>01.08.2017 - 20.07.2017</p>
                </div>
                <div className="bottomCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>
                    <a href="#">
                      🔗
                    </a>
                  </p>
                </div>
              </div>
              <p>2019</p>
            </div>
            <div className="timestamp">
              <div className="circle">

                <div className="topCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>01.08.2017 - 20.07.2017</p>
                </div>
                <div className="bottomCard">
                  <h3>School of voice</h3>
                  <h4>England</h4>
                  <p>
                    <a href="#">
                      🔗
                    </a>
                  </p>
                </div>
              </div>
              <p>Present</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="contactContainer">
          <form>
            <span>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="name">Email</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="name">Phone</label>
              <input type="text" />
            </span>
            <span>
              <label htmlFor="name">Subject</label>
              <input type="text" />
            </span>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
          <div className="contactInfo">
            <h1>Contact info</h1>
            <div>
              <h2>Email</h2>
              <h2>Phone</h2>
            </div>
            <div className="row">
              <img src="soundcloud.svg" alt="soundcloudLogo" />
              <img src="instagram.svg" alt="instagramLogo" />
              <img src="facebook.svg" alt="facebookLogo" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>Copyright</h1>
      </div>
    </div>
  );
}


window.onscroll = (e) => {
  let navbar = document.getElementById('navbar');
  let reviews = document.getElementById('the-reviews');
  let leftBtn = document.getElementById('leftBtn');
  let rightBtn = document.getElementById('rightBtn');
  let index = 0;
  let revs = [{
    testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea tenetur in itaque aut deserunt ullam iure sit et consequatur quae corporis, accusamus repudiandae, dolores quibusdam iste error nesciunt quam sint. Deserunt eos facilis consectetur voluptatum quaerat architecto blanditiis! Aspernatur veniam ea dolore necessitatibus quisquam facilis quia veritatis. Incidunt laborum aliquid eveniet eligendi quisquam impedit dolores, totam eum sunt. Doloribus, cum eius aspernatur voluptas eaque illum ea delectus dignissimos voluptate iusto vitae fugiat repellat et a vero!",
    user: "John doe"
  },
  {
    testimony: "Quo ea tenetur in itaque aut deserunt ullam iure sit et consequatur quae corporis, accusamus repudiandae, dolores quibusdam iste error nesciunt quam sint. Deserunt eos facilis consectetur voluptatum quaerat architecto blanditiis! Aspernatur veniam ea dolore necessitatibus quisquam facilis quia veritatis. Incidunt laborum aliquid eveniet eligendi quisquam impedit dolores, totam eum sunt. Doloribus, cum eius aspernatur voluptas eaque illum ea delectus dignissimos voluptate iusto vitae.",
    user: "Loly poly"
  }
    , {
    testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    user: "Holy moly"
  }]

  leftBtn.onclick = e => {
    if (index === 0)
      index = 2
    else
      index--;
    reviews.innerHTML = `<p><i>${revs[index].testimony}</i></p><small>${revs[index].user}</small>`
  }
  rightBtn.onclick = e => {
    if (index === 2)
      index = 0
    else
      index++;
    reviews.innerHTML = `<p><i>${revs[index].testimony}</i></p><small>${revs[index].user}</small>`

  }



  if (window.scrollY > 10) {
    navbar.classList.add('white-bg');
  }
  else
    navbar.classList.remove('white-bg');
}

export default App;
