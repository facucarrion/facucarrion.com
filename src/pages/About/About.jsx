const About = () => (
  <section
    className="aboutme"
    id="about"
  >
    <h2 className="aboutme__title">What About Me?</h2>

    <div className="aboutme__container">
      <div className="aboutme__textcont">
        <p className="aboutme__text">
          Soy <strong className="aboutme__text--decorated">Desarrollador Web 👨🏻‍💻</strong>, me apasiona combinar lo
          técnico con lo abstracto para crear diseños bonitos con el mejor rendimiento.
        </p>
        <p className="aboutme__text">
          Desarrollo interfaces dinámicas con React y SASS. También, presto especial atención a la Optimización{' '}
          <strong className="aboutme__text--decorated">(SEO)</strong> para que tu web se posicione en la cúspide 🔝 de
          Internet.
        </p>
        <p className="aboutme__text">
          Estoy en busca de Experiencia realizando proyectos como{' '}
          <strong className="aboutme__text--decorated">Freelance</strong>, Colaborando 👥 con colegas de la industria.
        </p>
        <p className="aboutme__text">
          Mi método de <strong className="aboutme__text--decorated">Trabajo</strong> se basa en la Cooperación y en la
          Organización 🗃️, sin dejar de lado la Eficiencia.
        </p>
        <p className="aboutme__text">
          Me gusta <strong className="aboutme__text--decorated">Aprender</strong> cosas nuevas todos los días, para
          renovar mis maneras de trabajar y ser capaz de encontrar la mejor Solución 💡.
        </p>
      </div>
      {/* <picture className="aboutme__imgcont">
          <img
            src="/img/white-logo-transparent.png"
            alt=""
            className="aboutme__img"
          />
        </picture> */}
    </div>
  </section>
)

export { About }
