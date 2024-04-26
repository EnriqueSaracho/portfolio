// Importing useNavigate.
import { useNavigate } from "react-router-dom";

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

      {/* Title */}
      <h3 className="project-title">{title}</h3>

      <div className="project-text">
        {/* Description */}
        <p className="project-description">
          {desc} {path ? <b className="see-more">See more...</b> : null}
        </p>

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
function ProjectPage({
  img,
  title,
  desc,
  btn1,
  btn1Text,
  btn2,
  btn2Text,
  field,
  skills,
}) {
  const navigate = useNavigate();
  return (
    <div>
      {/* Return button */}
      <button
        className="btn go-back"
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        <BsArrowReturnLeft />
      </button>

      <div className="project-page">
        {/* Title */}
        <h2 className="project-info-title">{title}</h2>

        <div className="project-info">
          {/* Image Slideshow */}
          <div className="project-page-img-container">
            <div className="project-page-img-slider-wrapper">
              {/* Slider */}
              <div className="project-page-img-slider">
                {img.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt={title}
                      id={`slide-${index + 1}`}
                      className="project-page-img"
                    />
                  );
                })}
              </div>

              {/* Slider navigation */}
              <div class="project-page-img-slider-nav">
                {img.map((image, index) => {
                  return <a key={index} href={`#slide-${index + 1}`}></a>;
                })}
              </div>
            </div>
          </div>

          <div className="project-info-text">
            {/* Description */}
            <p className="project-info-text-description">{desc}</p>
            {/* <p className="project-info-text-description">
              asdfasdfasdf asdfdsf{" "}
            </p> */}

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
              <a
                href={btn1}
                className="btn project-page-btn"
                target="_blank"
                rel="noreferrer"
              >
                {btn1Text}
              </a>
              {btn2 ? (
                <a
                  href={btn2}
                  className="btn project-page-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {btn2Text}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Return button */}
      <button
        className="btn go-back"
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        <BsArrowReturnLeft />
      </button>
    </div>
  );
}

export { ProjectThumbnail, ProjectPage };
