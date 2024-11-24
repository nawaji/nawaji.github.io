import './styles/App.css';
import profile from './images/profile.jfif'
import project_img from './images/soundbendor.png'

function App() {
  return (
    <html>
      <head>
      <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js" />
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
              <p>
                Initially, I attended Oregon State to study Mechanical Engineering.
                Learning MATLAB during my Sophomore year made me realize I would enjoy studying
                anything computer and software related. More specifically, security related topics
                such as networking and malware analysis, but also web design.

              </p>
              <p>
                My hobbies include graphic design / design, video games, and photography. 
              </p>
            </div>
            <img src={profile} alt='selfie' className='about-picture' />
          </div>
        </div>
        <div className='divider'>Projects</div>
          <div className='container'>
            <div className='project-list'>
              <div className='project-card'>
                <img src={project_img} alt='project'/>
                <div className='project-title'>Soundbendor Website</div>
                <ul className='project-links'>
                  <li><a href='#'>Link</a></li>
                  <li><a href='#'>Github</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
