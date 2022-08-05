const About = () => {
  return (
    <div
      className={
        "bg-palatinate_purple mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-0 flex flex-col sm:flex-row justify-evenly"
      }
    >
      <div className="flex flex-col sm:w-[45%]">
        <h1
          className={
            "text-xl font-bold text-white sm:text-4xl my-2 sm:flex sm:justify-center"
          }
        >
          About Me
        </h1>
        <hr className={"w-[100%] pb-1"}></hr>
        <div className="text-base sm:text-lg">
          <p className={"text-white pb-2"}>
            Hi, my name is{" "}
            <span className="text-outrageous_orange">Sean Kim</span>. I began my
            journey on May 2014 with this{" "}
            <a
              href="https://www.sean.kim/4yearsago/endofyearproject"
              className={
                "underline text-outrageous_orange hover:placeholder-paradise_pink visited:placeholder-paradise_pink"
              }
            >
              project.
            </a>
          </p>
          <p className="text-white pb-2">
            In 2018 I led a team of 5 students to host the{" "}
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
            Now I try my best to continue learning and make the best user
            experiences.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:w-[45%]">
        <h1
          className={
            "text-xl font-bold text-white sm:text-4xl my-2 sm:flex sm:justify-center"
          }
        >
          Education
        </h1>
        <hr className={"w-[100%] pb-1"}></hr>
        <div className="flex flex-row justify-between text-sm sm:text-lg">
          <div>
            <p className="text-white">University of Illinois at Chicago</p>
            <p className="text-white">B.S. in Computer Science</p>
          </div>
          <div>
            <p className="text-outrageous_orange">FA 2014 - SP 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
