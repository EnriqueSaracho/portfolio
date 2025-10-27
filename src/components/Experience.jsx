import { useNavigate } from "react-router-dom";
import SkillsIcon from "./SkillsIcon";

/**
 * Experience  component
 *  For Experiences section in home page.
 *
 * @param title - project's title (string).
 * @param path - react-router path to project's page (string).
 */
function Experience({
  title,
  date,
  role,
  desc1,
  desc2,
  desc3,
  linkTitle,
  path,
  url,
}) {
  const navigate = useNavigate();

  return (
    <div tabIndex={0} className="experience" aria-label={title}>
      <div className="project-content">
        {/* Title */}
        <h3 className="experience-title">{title}</h3>

        {/* Date */}
        <p className="experience-date">{date}</p>

        {/* Role */}
        <p className="experience-role">{role}</p>

        {/* Description */}
        {(desc1 || desc2 || desc3) && (
          <ul className="experience-description">
            {desc1 && <li>{desc1}</li>}
            {desc2 && <li>{desc2}</li>}
            {desc3 && <li>{desc3}</li>}
          </ul>
        )}

        {/* Link - Internal (path) or External (url) */}
        {linkTitle && (
          <>
            {path ? (
              // Internal navigation
              <button
                onClick={() => navigate(path)}
                className="experience-link experience-link-internal"
              >
                <b className="see-more">{linkTitle}</b> →
              </button>
            ) : url ? (
              // External link
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link experience-link-external"
              >
                <b className="see-more">{linkTitle}</b> ↗
              </a>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export { Experience };
