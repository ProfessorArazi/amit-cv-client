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
            {window.innerWidth <= 768 && me("250px", "5% auto")}
            <h2 className="about-title__sec">
              Hi there!
              <br /> I am Amit Arazi
            </h2>
            <p>
              I am a fullstack developer. <br /> I am passionate about my work
              with keen eye for aesthetics. <br /> I am a quick learner, detail
              oriented and excellent at strategic planning. <br />
              <br /> I am also flexible and easy-going with superb interpersonal
              skills, which makes me a great team player and developer. <br />{" "}
              Loves to learn new things on my own,and I always Improve my
              skills. <br />
              My goal is always driven towards providing amazing experience with
              the best level of quality and service to them. <br /> I live and
              breathe the web app development world that i love so much.
            </p>
            {/* <div className="actions">
            <Button>lololol</Button>
            <Button>lololol</Button>
            <Button>lololol</Button>
          </div> */}
          </div>
        </div>
        {window.innerWidth > 768 && me("350px")}
      </div>
    </>
  );
};
export default About;
