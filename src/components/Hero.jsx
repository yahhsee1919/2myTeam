function Hero() {
  return (
    <div className="bg-midnightGreen">
      <div className="flex flex-col items-center justify-center mx-auto pb-44  text-center max-w-7xl text-white  p-6 space-y-4 relative  lg:flex-row lg:space-y-0 lg:pt-12 ">
        <h1 className="text-4xl p-4 font-bold mx-auto tracking-wide max-w-md lg:text-6xl lg:text-left lg:pl-24">
          Find the best <span className="text-lightCoral">talent</span>
        </h1>
        <p className="leading-7 p-4 max-w-md mx-auto lg:text-lg lg:text-left">
          Finding ther ight peopel and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that
        </p>
        <div className="absolute bottom-0 md:left-[27%] lg:left-[60%]">
          <img src="/assets/bg-pattern-home-2.svg" alt="" />
        </div>
        <div className="absolute left-[-100%] lg:-left-16 lg:top-25 ">
          <img src="/assets/bg-pattern-home-1.svg" alt="" className="h-32" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
