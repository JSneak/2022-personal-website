const About = () => {
  return (
    <div
      id="about"
      className={"py-10 sm:py-0 flex flex-col sm:flex-row justify-evenly"}
    >
      <div className="flex flex-col">
        <h1
          className={
            "text-xl font-bold text-white sm:text-4xl my-2 sm:flex sm:justify-center font-headerFont"
          }
        >
          About Me
        </h1>
        <hr className={"w-[100%] pb-1"}></hr>
        <div className="text-base sm:text-lg font-bodyFont">
          <p className={"text-white pb-2"}>
            In 2014, I began my web development journey creating this{" "}
            <a
              href="https://www.sean.kim/4yearsago/endofyearproject"
              className={
                "underline text-outrageous_orange hover:placeholder-paradise_pink visited:placeholder-paradise_pink"
              }
            >
              project.
            </a>
            From 2016 to 2018, my interest in web development and hackathons led
            me to lead a team of 5 students to host THE{" "}
            <a
              href="https://www.youtube.com/watch?v=k8HI0y2CyKI"
              className={
                "underline text-outrageous_orange hover:placeholder-paradise_pink visited:placeholder-paradise_pink"
              }
            >
              largest highschool hackathon
            </a>{" "}
            in the Midwest.
          </p>
          <p className="text-white pb-2">
            Today, my main focus is taking complicated problems and building
            mind-blowing user experiences. When i'm not working, you can find me
            traveling the world or learning new techniques to hone my craft.
          </p>
          <p className="text-white pb-2">
            Currently I'm a Rotational Developer Associate at Northern Trust
            doing Fullstack Development. I'm always looking for new
            opportunities to create amazing user experiences.
          </p>
          <a
            className="bg-outrageous_orange text-white font-bold py-2 px-4 rounded font-bodyFont"
            href="https://docs.google.com/document/d/1f7NKqpiJZiOxvev5hMJ59Qgf4SUZsx9e/edit?usp=sharing&ouid=111409459282321036132&rtpof=true&sd=true"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
