import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      {/* Background Glow */}
      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      {/* Floating Particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Logo Section */}
      <div className="loader-content">

        <div className="logo-ring">

          <div className="ring"></div>

          <div className="logo">

            <h1>SS</h1>

          </div>

        </div>

        <h2>Shams Sagir</h2>

        <p>Building Premium Experiences</p>

        <div className="loading-line">

          <span></span>

        </div>

      </div>

    </div>
  );
}

export default Loader;