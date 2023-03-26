import "../../scss/App.scss";
import "@lottiefiles/lottie-player";

const About = () => {
  const me = (width, margin = "0") => {
    return (
      <lottie-player
        background="transparent"
        autoplay
        loop
        mode="normal"
        src="https://assets8.lottiefiles.com/packages/lf20_yd8fbnml.json"
        style={{ width, margin }}
      ></lottie-player>
    );
  };

  return (
    <>
      <h1 className="about-title">ABOUT ME</h1>
      <div className="about-me">
        <div>
          <div className="my-card">
            {window.innerWidth <= 768 && me("200px", "5% auto")}
            <h2 className="about-title__sec">
              Hi there!
              <br /> I am Amit Arazi
            </h2>
            <p>
              Since I was a child I knew that when I will grow up I would like
              to work in the discipline of computer science. <br />
              This is an area that has always attracted me because my dad is a
              programmer and I have always looked at him as a role model. <br />
              In the last two years I completed successfully many online courses
              and developed competence in several full stack sub areas and
              recently I completed full stack program in SVCollage with the
              final score of 91. <br /> I consider myself as self learner, I am
              highly motivated and eager to start my career path as a software
              programmer with ambition to further develop my knowledge over time
              and become an expert.
            </p>
          </div>
        </div>
        {window.innerWidth > 768 && me("600px")}
      </div>
    </>
  );
};
export default About;
