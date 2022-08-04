const LeftHero = () => {
  return (
    <div className={"flex flex-col grow sm:basis-1/2 justify-center "}>
      <p className="text-slate-300 text-4xl sm:text-4xl">Hello, I'm</p>
      <h1 className="text-white font-bold text-6xl">Sean J. Kim</h1>
      <p className={" text-slate-300 text-4xl "}>
        A <span className="text-outrageous_orange">Frontend Web Developer</span>{" "}
        from <span className="text-paradise_pink">Chicago</span>
      </p>
    </div>
  );
};

export default LeftHero;
