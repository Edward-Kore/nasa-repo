import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="parallax">
        <div id="hero-section">
          <h1>
            This website provides access to NASA&apos;s GitHub Repositories
          </h1>
          <p>Many GitHub repositories are available at the link below.</p>
          <a href="/github" className="btn btn-warning mb-2">
            Explore
          </a>
        </div>
      </div>
      <div className="home-text">
        <h2>Why do we need NASA’s GitHub repositories?</h2>
        <p>
          NASA’s GitHub repositories are a treasure trove of open-source
          software and data that benefit a wide range of users. For researchers
          and scientists, these repositories provide access to cutting-edge
          tools and datasets that can be used to advance their own studies. By
          sharing their code and data openly, NASA fosters collaboration and
          innovation, allowing researchers to build on each other’s work and
          accelerate scientific discovery.
        </p>
        <p>
          For developers and engineers, NASA’s GitHub repositories offer a
          wealth of resources that can be used to develop new applications and
          technologies. These repositories include everything from software
          libraries and frameworks to complete applications and tools. By
          leveraging NASA’s open-source projects, developers can save time and
          effort, as they don’t need to start from scratch. Instead, they can
          build on the robust and well-documented code provided by NASA,
          ensuring high-quality and reliable solutions.
        </p>
        <p>
          Additionally, educators and students benefit greatly from NASA’s
          GitHub repositories. These resources provide valuable learning
          materials and real-world examples that can be used in educational
          settings. Students can explore and experiment with actual NASA code,
          gaining hands-on experience with advanced technologies and
          methodologies. Educators can incorporate these resources into their
          curriculum, providing students with a unique opportunity to learn from
          one of the world’s leading space agencies.
        </p>
      </div>
      <div className="parallax">
        <div className="home-text">
          <h2>NASA makes new discoveries every day!</h2>
          <p>
            If you would like to go to the official NASA website, click on the
            button below.
          </p>
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            className="btn btn-warning mb-2"
          >
            Explore
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
