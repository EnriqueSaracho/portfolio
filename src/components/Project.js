// Importing useNavigate.
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Importing SkillsIcon component.
import SkillsIcon from "./SkillsIcon";

// Importing from react-icons.
import { BsArrowReturnLeft } from "react-icons/bs";

/**
 * Project thumbnail component
 *  For projects section in home page.
 *
 * @param img - path to project's thumbnail image (string).
 * @param title - project's title (string).
 * @param field - project's field (string).
 * @param desc - project's description (string).
 * @param skills - skills used for project's creation (array of strings).
 * @param path - react-router path to project's page (string).
 */
function ProjectThumbnail({ img, title, field, desc, skills, path }) {
  const navigate = useNavigate();

  return (
    <div
      tabIndex={0}
      className="project"
      onClick={() => {
        navigate(path);
      }}
      aria-label={title}
    >
      {/* Image */}
      <img src={img} alt={title} className="project-img" />

      <div className="project-content">
        {/* Title */}
        <h3 className="project-title">{title}</h3>

        {/* Description */}
        <p className="project-description">
          {desc} {path ? <b className="see-more">See more...</b> : null}
        </p>

        <div className="project-tech">
          {/* Field */}
          <h4 className="project-field">{field}</h4>

          {/* Skills */}
          <div className="project-skills">
            {skills.map((skill) => {
              return <SkillsIcon name={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Project page component.
 *  For individual project page.
 *
 * @param img - paths to project's images (array of strings).
 * @param title - project's title (string).
 * @param desc - project's description (string).
 * @param btn1 - link to project's page (string).
 * @param btn1Text - text displayed in button 1 (string).
 * @param btn2 - link to project's second page (string).
 * @param btn2Text - text displayed in button 2 (string).
 * @param skills - skills used in project's creation.
 *
 */
function ProjectPage({ img, title, desc, btn1, btn1Text, btn2, btn2Text, field, skills }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    const slider = document.getElementById('imageSlider');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-nav-prev');
    const nextBtn = document.querySelector('.slider-nav-next');
    
    if (!slider || !dots.length) return;
    
    let currentSlide = 0;
    const totalSlides = img.length;
    
    const updateSlider = () => {
      slider.scrollTo({
        left: currentSlide * slider.offsetWidth,
        behavior: 'smooth'
      });
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    };
    
    const goToSlide = (index) => {
      currentSlide = index;
      updateSlider();
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    };
    
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    };
    
    // Event listeners
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    // Handle manual scrolling/swiping
    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const slideWidth = slider.offsetWidth;
      const newCurrentSlide = Math.round(scrollLeft / slideWidth);
      
      if (newCurrentSlide !== currentSlide) {
        currentSlide = newCurrentSlide;
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      }
    };
    
    // Event listeners
    document.addEventListener('keydown', handleKeyDown);
    slider.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [img.length]);
  
  return (
    <div>
      {/* Return button */}
      {/* <button
        className="btn go-back"
        onClick={() => {
          navigate("/portfolio#about");
        }}
      >
        <BsArrowReturnLeft />
      </button> */}

      <div className="project-page">
        {/* Title */}
        <h2 className="project-info-title">{title}</h2>

        <div className="project-info">
          {/* Image Slideshow */}
          <div className="project-page-img-container">
            <div className="project-page-img-slider-wrapper">
              {/* Navigation arrows */}
              <button className="slider-nav-btn slider-nav-prev" aria-label="Previous image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="slider-nav-btn slider-nav-next" aria-label="Next image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Slider */}
              <div className="project-page-img-slider" id="imageSlider">
                {img.map((image, index) => {
                  return <img key={index} src={image} alt={title} id={`slide-${index + 1}`} className="project-page-img" />;
                })}
              </div>

              {/* Slider navigation dots */}
              <div className="project-page-img-slider-nav">
                {img.map((image, index) => {
                  return (
                    <button 
                      key={index} 
                      className={`slider-dot ${index === 0 ? 'active' : ''}`}
                      data-slide={index}
                      aria-label={`Go to image ${index + 1}`}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="project-info-text">
            {/* Description */}
            <p className="project-info-text-description">{desc}</p>

            {/* Field */}
            <h4 className="project-field">{field}</h4>

            {/* Skills */}
            <div className="project-skills">
              {skills.map((skill) => {
                return <SkillsIcon name={skill} />;
              })}
            </div>

            {/* Buttons/Links */}
            <div className="project-info-btns">
              <a href={btn1} className="btn project-page-btn" target="_blank" rel="noreferrer">
                {btn1Text}
              </a>
              {btn2 ? (
                <a href={btn2} className="btn project-page-btn" target="_blank" rel="noreferrer">
                  {btn2Text}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Return button */}
      {/* <button
        className="btn go-back"
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        <BsArrowReturnLeft />
      </button> */}
    </div>
  );
}

export { ProjectThumbnail, ProjectPage };
