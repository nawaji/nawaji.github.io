const nav_bar = () => {
    return (
        <header className='container'>
          <nav className='navbar'>
            <div class='nav-logo'>JT</div>
              <ul>
              <a href="#about"><li className='int-button'>About</li></a>
              <a href="#projects"><li className='int-button'>Projects</li></a>
              </ul>
          </nav>
        </header>        
    )
};

export default nav_bar;