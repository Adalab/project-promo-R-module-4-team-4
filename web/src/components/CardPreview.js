import '../styles/layout/CardPreview.scss';
import defaultPhoto1 from '../images/preview1.jpg';
import defaultPhoto2 from '../images/preview2.jpg';
import defaultPhoto3 from '../images/preview3.jpg';
import { NavLink } from 'react-router-dom';

import logoCards from '../images/logo-duquesas-3.png';

function CardPreview(props) {
  const defaultPhotos = [defaultPhoto1, defaultPhoto2, defaultPhoto3];
  const photo = props.data.photo
    ? props.data.photo
    : defaultPhotos[props.data.palette - 1];

  const previewText = (property, defaultText) => {
    if (props.data[property]) {
      return props.data[property];
    } else {
      return defaultText;
    }
  };
  const linkedinUrl = `https://www.linkedin.com/in/${props.getLinkedinUser()}`;
  const githubUrl = `https://github.com/${props.getGithubUser()}`;

  const salaryText = () => {
    if (props.data.salary === '1') {
      return '30.000-40.000';
    } else if (props.data.salary === '2') {
      return '40.000-50.000';
    } else {
      return '>=50.000';
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className={`palette-${props.data.palette}`}>
          <div className="our-team">
            <div className="picture">
              {/* <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=1027"
                alt="Preview"
              /> */}
              <div
                className="img-fluid"
                style={{ backgroundImage: `url(${photo})` }}></div>
            </div>
            <div className="team-content">
              <h3 className="name">
                {previewText('name', 'Nombre Apellidos')}
              </h3>
              <h4 className="title">
                {previewText('job', 'Front End Developer')}
              </h4>
              <h4 className="title">{props.data.additionalInfo}</h4>
              <h5 className="title">{`Sueldo esperado: ${salaryText()}`}</h5>
            </div>
            <ul className="social">
              <li>
                <a
                  href={`tel:${props.data.phone}`}
                  target="_blank"
                  className="telephone"
                  rel="noreferrer">
                  <i className="preview-icon fa-solid fa-mobile-screen-button preview__icons--color"></i>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${props.data.email}`}
                  target="_blank"
                  className="emailadress"
                  rel="noreferrer">
                  <i className="preview-icon fa-regular fa-envelope preview__icons--color"></i>
                </a>
              </li>
              <li>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  className="linkedin"
                  rel="noreferrer">
                  <i className="preview-icon fa-brands fa-linkedin-in preview__icons--color"></i>
                </a>
              </li>
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  className="github"
                  rel="noreferrer">
                  <i className="preview-icon fa-brands fa-github-alt preview__icons--color"></i>
                </a>
              </li>
              <li>
                <NavLink to="/" className="github" rel="noreferrer">
                  <img
                    className="preview-icon preview__icons--color logoplus"
                    src={logoCards}
                    alt="logoDeshacer"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// <article
//   className={`preview__container js-mother-of-palettes palette-${props.data.palette}`}>
//   <h2 className="preview__name">
//     {previewText('name', 'Nombre Apellidos')}
//   </h2>
//   <h3 className="preview__job">
//     {previewText('job', 'Front End Developer')}
//   </h3>
//   <div
//     className="preview__img js__profile-image"
//     style={{ backgroundImage: `url(${photo})` }}></div>
//   <ul className="preview__icons">
//     <li>
//       <a
//         href={`tel:${props.data.phone}`}
//         target="_blank"
//         className="telephone"
//         rel="noreferrer">
//         <i className="fa-solid fa-mobile-screen-button preview__icons--color"></i>
//       </a>
//     </li>
//     <li>
//       <a
//         href={`mailto:${props.data.email}`}
//         target="_blank"
//         className="emailadress"
//         rel="noreferrer">
//         <i className="fa-regular fa-envelope preview__icons--color"></i>
//       </a>
//     </li>
//     <li>
//       <a
//         href={linkedinUrl}
//         target="_blank"
//         className="linkedin"
//         rel="noreferrer">
//         <i className="fa-brands fa-linkedin-in preview__icons--color"></i>
//       </a>
//     </li>
//     <li>
//       <a
//         href={githubUrl}
//         target="_blank"
//         className="github"
//         rel="noreferrer">
//         <i className="fa-brands fa-github-alt preview__icons--color"></i>
//       </a>
//     </li>
//     <li>
//     <p>{salaryText()}</p>
//     </li>
//     <li>
//     <p>{props.data.additionalInfo}</p>
//     </li>
//     <li>
//     <p>{props.data.openToWork}</p>
//     </li>
//     <li>
//       <NavLink to="/" className="github" rel="noreferrer">
//         <img
//           className="preview__icons--color logoplus"
//           src={logoCards}
//           alt="logoDeshacer"
//         />
//       </NavLink>
//     </li>
//   </ul>
// </article>

export default CardPreview;
