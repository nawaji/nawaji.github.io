import './styles/App.css';
import profile from './images/profile.jfif'
import Navbar from './components/nav_bar.js'
import ProjectCard from './components/project_card.js'

const project_data = require('./data/projects.json')

function App() {
  return (
    <html>
      <head>
        <title>
          Jonathan To
        </title>
      </head>
      <body>
        <div className='centered-content'>
        <Navbar />
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
                My hobbies include graphic design, multiplayer games, and photography. 
              </p>
            </div>
            <img src={profile} alt='selfie' className='about-picture' />
          </div>
        </div>
        <div className='divider'>Projects</div>
          <div className='container'>
            <div className='project-list'>
              {project_data.map((proj) => (
                <div>
                <ProjectCard project={proj} key={proj.title} />
                </div>
              ))}

            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
