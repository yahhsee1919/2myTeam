function AboutHero() {
  return (
    <div className="bg-midnightGreen">
      <div className="flex flex-col items-center justify-center pb-44  text-center max-w-7xl mx-auto text-white  p-6 space-y-4 relative  md:items-start lg:flex-row lg:space-y-0 lg:pt-12 ">
        <h1 className="text-4xl p-4 font-bold mx-auto tracking-wide max-w-md lg:text-6xl lg:text-left lg:pl-24">
          About
        </h1>
        <p className="leading-7 p-4 max-w-md mx-auto lg:text-lg lg:text-left lg:max-w-xl lx:max-w-2xl">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experience. We'll bring those teams to you.
        </p>
        <div className="absolute -bottom-24 -right-24 md:bottom-0 ">
          <img src="/assets/bg-pattern-about-1-mobile-nav-1.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
