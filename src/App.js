import './styles/App.css';
import profile from './images/profile.png'

function App() {
  return (
    <html>
      <head>
      <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js">
      </script>
        <title>
          Jonathan To
        </title>
      </head>
      <body>
        <div className='centered-content'>
        <header className='container'>
          <nav className='navbar'>
            <div class='nav-logo'><a href='#'>Logo</a></div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
          </nav>
        </header>
        <div className='home'>
          <h1 className='home-name'>Jonathan To</h1>
          <h3 className='home-caption'>Software Engineering</h3>
        </div>
        <div>
          <div className='divider'>About</div>
        </div>
        <div className='container'>
          <div className='about-text'>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Nec gravida a torquent maximus ante sapien.
          </p>
          </div>
          <div className='about-picture-frame'>
            <img src={profile} alt='profile picture' className='about-picture' />
          </div>
        </div>
        <div>
        <div className='divider'>Projects</div>
        </div>
        <footer>
          <div className='divider'>
            Github, LinkedIn Links
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}

export default App;
