import '../styles/layout/Design.scss';

const Design = (props) => {
  const handleChange = (ev) => {
    props.handleInput({ name: ev.target.name, value: ev.target.value });
  };
  const handleClickDesign = (ev) => {
    props.handleClickDesign();
  };

  return (
    <fieldset className="design">
      <div className="design__title" onClick={handleClickDesign}>
        <legend className="design__legend">
          <i className="fa-regular fa-object-ungroup design__legend--icon"></i>
          Diseña
        </legend>
        <i
          className={`fa-solid fa-angle-down arrow ${
            props.activeSection === 'design' ? 'arrow-up' : ''
          }`}></i>
      </div>
      <section
        className={`design__palette js-design ${
          props.activeSection !== 'design' ? 'collapse' : ''
        }`}>
        <span className="design__palette__span"> Colores</span>
        <div className="design__palette__radio">
          <label htmlFor="1" className="design__palette__radio--colors">
            <input
              className="js-btn-green"
              type="radio"
              name="palette"
              id="1"
              value="1"
              onChange={handleChange}
              checked={props.palette === '1'}
            />
            <div className="design__palette__1">
              <div className="design__palette__1--color dark-green"></div>
              <div className="design__palette__1--color dirty-blue"></div>
              <div className="design__palette__1--color hospital-green"></div>
            </div>
          </label>
          <label htmlFor="2" className="design__palette__radio--colors">
            <input
              className="js-btn-red"
              type="radio"
              name="palette"
              id="2"
              value="2"
              onChange={handleChange}
              checked={props.palette === '2'}
            />
            <div className="design__palette__2">
              <div className="design__palette__2--color dried-blood"></div>
              <div className="design__palette__2--color rusty-red"></div>
              <div className="design__palette__2--color tomato"></div>
            </div>
          </label>
          <label htmlFor="3" className="design__palette__radio--colors">
            <input
              className="js-btn-grey"
              type="radio"
              name="palette"
              id="3"
              value="3"
              onChange={handleChange}
              checked={props.palette === '3'}
            />
            <div className="design__palette__3">
              <div className="design__palette__3--color slate"></div>
              <div className="design__palette__3--color faded-orange"></div>
              <div className="design__palette__3--color light-grey-blue"></div>
            </div>
          </label>
          <label htmlFor="4" className="design__palette__radio--colors">
            <input
              className="js-btn-purple"
              type="radio"
              name="palette"
              id="4"
              value="4"
              onChange={handleChange}
              checked={props.palette === '4'}
            />
            <div className="design__palette__4">
              <div className="design__palette__4--color aubergine"></div>
              <div className="design__palette__4--color purple"></div>
              <div className="design__palette__4--color lilac"></div>
            </div>
          </label>
        </div>
      </section>

      <div className="border_button"></div>
    </fieldset>
  );
};
export default Design;
