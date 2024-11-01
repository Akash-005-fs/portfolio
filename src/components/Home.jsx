import React, { useState, useEffect } from 'react';
import '../styles/home.css'; // Import the CSS file
import Loading from './Loading'; // Import the Loading component
import Skills from './Skills';
import Tools from './Tools';
import Sec4in from './Sec4in';
import Resume from './Resume';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  useEffect(() => {
    if (!isLoading) {
      const sections = document.querySelectorAll('div[class^="section"]');
      let currentSectionIndex = 0;
      let isScrolling = false;

      const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
          sections[index].scrollIntoView({ behavior: 'smooth' });
          currentSectionIndex = index;
        }
      };

      const handleScroll = (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
          if (currentSectionIndex < sections.length - 1) {
            isScrolling = true;
            scrollToSection(currentSectionIndex + 1);
          }
        } else {
          if (currentSectionIndex > 0) {
            isScrolling = true;
            scrollToSection(currentSectionIndex - 1);
          }
        }

        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      };

      window.addEventListener('wheel', handleScroll);

      const observerOptions = {
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const content = entry.target.querySelector('.content');
          if (entry.isIntersecting) {
            content.classList.add('fade-in');
            content.classList.remove('fade-out');
          } else {
            content.classList.remove('fade-in');
            content.classList.add('fade-out');
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div>
      <div className="section1">
        <div className="content fade-out">
          <div className="sec1">
            {/* <nav className="head"></nav> */}
            <div className="intro">
              <div className="intro1">    <div className='dream'>

              
              
    {/* Menu Icon */}
    {/* <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'segment'}</span>
      </div> */}

      {/* Full-screen menu */}
      {/* {isMenuOpen && (
        <div className="fullscreen-menu">

        
          <ul className="menu-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="social-icons">
           
          </div>
        </div>
      )} */}
              
              
              
              <h1 className='t1'>hi there!</h1></div></div>
              <div className="intro2">

              <h1 className='t2'>i'm  akash  pradeep</h1>


              <div class="animy">
    <div class="text-animation">
        <span>#designer</span>
        {/* <span>#problemsolver</span> */}
        <span>#developer</span>
        <span>#photographer</span>
    </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="content ">
          <div className="sec2">

          <div className="sec2cont">
            <h1 className="t3 ">who am i?</h1>
            <p className="p-content ">
                Hi👋, I'm Akash Pradeep, a passionate individual with a keen sense of humor for almost everything in life. I believe that joy fuels creativity, and I channel that energy into my work. Whether it's coding , designing or problem-solving, I aim to approach each challenge with a lighthearted spirit and a growth mindset.
            </p>

            <h1 className="t4 ">my strenghts</h1>
            <p class="p-content">
    I have competed in multiple national-level tech fests across India, winning multiple prizes in web designing and securing first prize multiple times. I am deeply into data structures, object-oriented programming, and responsive web designs, constantly honing my skills to stay at the forefront of technology.
</p>

        </div>




          </div>
        </div>
      </div>
      <div className="section3">
        <div className="content fade-out">
          <div className="sec3">


<div className='sec3top'>

<div className='sec3topin'>

<div className='t7'><h1>#SKILLS💫</h1>

</div>


<div className='skillscont'>

<Skills></Skills>

</div>



</div>






</div>

<div className='sec3bottom'>



<div className='sec3bottomin'>

<div className='t8'><h1>#TOOLBOX⚡</h1></div>


<div className='toolscont'>

<Tools></Tools>

</div>



</div>






</div>





          </div>
        </div>
      </div>
      <div className="section4">
        <div className="content fade-out">
          <div className="sec4">

<Sec4in></Sec4in>





          </div>
        </div>
      </div>
      <div className="section5">
        <div className="content fade-out">
          <div className="sec5">

          {/* <div className='lastv'>
      <div className='lastvin'>
        <div id='lv'>
       
        </div>
      </div>
    </div> */}

<div className='lastone'>

<div className='logo'><div className='logoin'></div></div>

<h1 className='t9'>wanna hire✋ or collaborate with me? </h1>

<div className='t10'>
  <h1>Contact : <a id='t10' href="mailto:akashpradeep@gmail.com">akashpradeep@gmail.com</a></h1>
</div>




<h1 className='t11'>connect with  me ! </h1>

<div className='social'>
  <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
  <a href="https://behance.net" target="_blank"><i class="fab fa-behance"></i></a>
  <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
  <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
</div>



</div>





<div className='downmenu'>





<ol>



{/* <li>Resume<span class="material-symbols-outlined">
arrow_outward
</span></li>  */}
 {/* <li >About me<span class="material-symbols-outlined">
arrow_outward
</span></li> */}


<li>
     


<Resume></Resume>


    </li>


</ol>




{/* 

<img className='vvvv' src="../v.gif" alt="Animated GIF" />
 */}








</div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
