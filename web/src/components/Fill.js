import '../styles/layout/Fill.scss';
import ImageReader from './ImageReader';

const Fill = (props) => {
  const handleChange = (ev) => {
    props.handleInput({ name: ev.target.name, value: ev.target.value });
  };

  const handleImage = (imageData) => {
    props.handleImage(imageData);
  };

  const handleClickFill = (ev) => {
    props.handleClickFill();
  };
  const errorPhoneText = (errorMsg) => {
    if (props.errorPhone) {
      return errorMsg;
    }
  };

  const errorEmailText = (errorMsg) => {
    if (props.errorEmail) {
      return errorMsg;
    }
  };

  return (
    <fieldset className="fill">
      <div className="fill__title" onClick={handleClickFill}>
        <legend className="fill__legend">
          <i className="fa-regular fa-keyboard fill__legend--icon"></i> Rellena
        </legend>
        <i
          className={`fa-solid fa-angle-down arrow ${
            props.activeSection === 'fill' ? 'arrow-up' : ''
          }`}></i>
      </div>

      <div
        className={`js-fill ${
          props.activeSection !== 'fill' ? 'collapse' : ''
        }`}>
        <label htmlFor="name" className="fill__label fill__label--name">
          <span className="fill__label__text--name">
            {' '}
            Nombre completo<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--name js-input js_input_name"
            type="text"
            name="name"
            id="name"
            placeholder="Ej: Sally Jill"
            onChange={handleChange}
            required
            value={props.data.name}
          />
        </label>
        <label
          htmlFor="job-position"
          className="fill__label fill__label--jobposition">
          <span className="fill__label__text--jobposition">
            Puesto<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--jobposition js-input js_input_job"
            type="text"
            name="job"
            id="job-position"
            placeholder="Ej: Front-end unicorn"
            onChange={handleChange}
            required
            value={props.data.job}
          />
        </label>
        <label
          htmlFor="job-position"
          className="fill__label fill__label--jobposition">
          <span className="fill__label__text--jobposition">
            Rango salarial requerido<span className="asterisc">*</span>
          </span>
          <select
            className="select"
            name="salary"
            id="salary"
            value = {props.data.salary}
            onChange={handleChange}>
            <option value="1">30.000-40.000</option>
            <option value="2">40.000-50.000</option>
            <option value="3"> &gt;=50.000</option>
          </select>
        </label>

        <ImageReader photo={props.data.photo} handleImage={handleImage} />
        <label
          htmlFor="openToWork"
          className="fill__label fill__label--jobposition">
          <span className="fill__label__text--jobposition">
            Actualmente trabajando:<span className="asterisc">*</span>
          </span>
          
          <label htmlFor='openToWorkSi'>
            <input
            id='openToWorkSi'
            type="radio"
            value="1"
            name="openToWork"
            onChange={handleChange}
            checked={props.data.openToWork==='' ? false : props.data.openToWork === '1' ? true : false}
            /> SI</label>
            <label htmlFor='openToWorkNo'>
            <input
            id='openToWorkNo'
            type="radio"
            value="0"
            name="openToWork"
            onChange={handleChange}
            checked={props.data.openToWork==='' ? false : props.data.openToWork === '0' ? true : false}
            /> NO</label>
        </label>
        <label htmlFor="email" className="fill__label fill__label--email">
          <span className="fill__label__text--email">
            Email<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--email js-input js_input_email"
            type="email"
            name="email"
            id="email"
            placeholder="Ej: sally.hill@gmail.com"
            onChange={handleChange}
            required
            value={props.data.email}
          />
        </label>
        <p className="error-msg">
          {' '}
          {errorEmailText('El email que has introducido no es correcto.')}
        </p>
        <label htmlFor="phone" className="fill__label fill__input--telefono">
          <span className="fill__label__text--telefono">Teléfono</span>
          <input
            className="fill__input fill__input--telefono js-input js_input_phone"
            type="text"
            name="phone"
            id="phone"
            placeholder="Ej: 555-55-55-55"
            onChange={handleChange}
            value={props.data.phone}
          />
        </label>
        <p className="error-msg">
          {' '}
          {errorPhoneText('El teléfono que has introducido no es correcto.')}
        </p>
        <label htmlFor="linkedin" className="fill__label fill__label--linkedin">
          <span className="fill__label__text--linkedin">
            Linkedin<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--linkedin js-input js_input_linkedin"
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Ej: linkedin.com/in/sally-hill"
            onChange={handleChange}
            required
            value={props.data.linkedin}
          />
        </label>
        <label htmlFor="github" className="fill__label fill__label--github">
          <span className="fill__label__text--github">
            Github<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--github js-input js_input_github"
            type="text"
            name="github"
            id="github"
            placeholder="Ej: @sally-hill"
            onChange={handleChange}
            required
            value={props.data.github}
          />
        </label>
        <label
          htmlFor="additionalInfo"
          className="fill__label fill__label--jobposition">
          <span className="fill__label__text--jobposition">
            Informacion adicional<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--jobposition js-input js_input_job"
            type="text"
            name="additionalInfo"
            id="additionalInfo"
            placeholder="Ej: Mi especialidad es.... Me gustaria trabajar con..."
            onChange={handleChange}
            required
            value={props.data.additionalInfo}
          />
        </label>
      </div>
      <div className="border_button"></div>
    </fieldset>
  );
};
export default Fill;
