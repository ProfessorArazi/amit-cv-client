import "../../scss/App.scss";
import "@lottiefiles/lottie-player";

const About = () => {
  return (
    <>
      <h1 className="about-title">ABOUT ME</h1>
      <div className="about-me">
        {/* <img src={me} /> */}
        <lottie-player
          background="transparent"
          autoplay
          loop
          mode="normal"
          src="https://assets8.lottiefiles.com/packages/lf20_yd8fbnml.json"
          style={{ width: "400px", height: "314px" }}
        ></lottie-player>
        <div>
          <div className="my-card">
            <h2 className="about-title__sec">Hi there! I am Amit Arazi</h2>
            <p>
              I am a Fullstack developer. <br /> I am passionate about my work
              with a keen eye for aesthetics. <br /> I am a quick learner,
              detail oriented and am excellent at strategic planning. <br />
              <br /> I am also flexible and easy-going with superb interpersonal
              skills, which makes me a great team player & as developer. <br />{" "}
              Loves to learn new things on my own,and i always Improves my
              skills. <br />
              my goal is always driven towards providing amazing experience with
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
      </div>
    </>
  );
};
export default About;
