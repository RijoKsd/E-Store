import Banner from '../assets/banner.png'
const Hero = () => {
  return (
    <section>
      <div
        className="hero h-svh "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="hero-overlay bg-opacity-50  "></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md  ">
            <h1 className="mb-5 text-2xl font-bold font-montserrat animate-pulsing">
              E-Store
            </h1>
            <p className="mb-5  text-5xl font-bold font-montserrat animate-flash">
              Most wanted and most loved
            </p>
            <button className="btn btn-info font-montserrat animate-shake">
              Shop New Arrivals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
