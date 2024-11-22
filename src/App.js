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
          <p className='home-name'>Jonathan To</p>
          <p className='home-caption'>Software Engineering</p>
        </div>
        <div className='divider'>About</div>
        <div className='container'>
          <div className='about'>
            <div className='about-text'>
           <p>
             Hello! My name is Jonathan. I graduated from Oregon State University
             in 2024 with a Bachelor's Degree in Computer Science, with a focus on Security.
           </p>
          </div>
           <div className='about-picture-frame'>
             <img src={profile} alt='profile picture' className='about-picture' />
           </div>
          </div>
        </div>
        <div className='divider'>Projects</div>
          <div className='container'>
            <div className='project-list'>
              <div className='project-card'>
                <p>test</p>
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}

export default App;
