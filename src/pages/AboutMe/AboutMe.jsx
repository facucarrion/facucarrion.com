const AboutMe = () => {
  return (
    <section
      className="aboutme"
      id="about"
    >
      <div className="aboutme__imgcont">
        <img
          src=""
          alt=""
          className="aboutme__img"
        />
      </div>
      <div className="aboutme__container">
        <p className="aboutme__text">
          Soy <strong className="aboutme__text--decorated">Desarrollador Web 👨🏻‍💻</strong>, apasionado por combinar lo
          técnico con lo abstracto para crear diseños bonitos con el mejor rendimiento.
        </p>
        <p className="aboutme__text">
          Desarrollo interfaces dinámicas con Vanilla JS, Vanilla CSS, React, SASS, Material UI y Bootstrap. También,
          presto especial atención a la Optimización <strong className="aboutme__text--decorated">(SEO)</strong> para
          que tu web se posicione en la cúspide 🔝 de Internet.
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
    </section>
  )
}

export { AboutMe }
