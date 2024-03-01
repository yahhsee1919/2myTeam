function Stories() {
  return (
    <div className="bg-deepJungleGreen ">
      <div className="flex flex-col  items-center-justify-center pb-32 pt-32  mx-auto max-w-7xl  text-center text-white p-6 space-y-4  relative overflow-hidden lg:pt-32  ">
        <h1 className="text-2xl font-bold p-4 max-w-lg mx-auto">
          Delivering real results for top companies. Some of our{" "}
          <span className="text-raptureBlue">success stories.</span>
        </h1>
        {/* Card container */}
        <div className="flex flex-col items-center justify-between space-y-24 pt-12 lg:pt-0 lg:flex-row lg:space-y-0 lg:space-x-6 lg:pt-12">
          {/* card 1 */}
          <div className="relative flex flex-col items-center justify-center mx-auto space-y-4">
            <p className="leading-7 z-10  max-w-sm mx-auto lg:text-lg lg:text-left md:max-w-lg ">
              "The team perfectly fir the specialized skill set required.They
              focused on the most essential features helping us launch the
              platform eight months fast than planeed"
            </p>
            <p className="text-xl font-bold text-raptureBlue">Kady Baker</p>
            <p className="text-sm italic">Product Manager at Bookmark</p>
            <img
              src="/assets/avatar-kady.jpg"
              alt=""
              className="h-16 rounded-full ring-2 ring-white"
            />
            <div className="absolute z-0 -top-10">
              <img src="/assets//icon-quotes.svg" alt="" />
            </div>
          </div>
          {/* card 2 */}
          <div className="relative flex flex-col items-center justify-center mx-auto space-y-4  ">
            <p className="leading-7 z-10  max-w-sm mx-auto lg:text-lg lg:text-left md:max-w-lg ">
              "We needed to automate our entire onboarding process. The team
              came in and build out the whole journey. Since going live, user
              retention has gove through the roof!"
            </p>
            <p className="text-xl font-bold text-raptureBlue">Aiysha Reese</p>
            <p className="text-sm italic">Founder of Manage</p>
            <img
              src="/assets/avatar-aiysha.jpg"
              alt=""
              className="h-16 rounded-full ring-2 ring-white"
            />
            <div className="absolute z-0 -top-10">
              <img src="/assets//icon-quotes.svg" alt="" />
            </div>
          </div>
          {/* card 3 */}
          <div className="relative flex flex-col items-center justify-center mx-auto space-y-4  ">
            <p className="leading-7 z-10  max-w-sm mx-auto lg:text-lg lg:text-left md:max-w-lg ">
              "Amazing. Our team helped us build an app that delivered a new
              experince for hiring a physio. The launch was an instant success
              with 100k downloads in the first month."
            </p>
            <p className="text-xl font-bold text-raptureBlue">Arthur Clarke</p>
            <p className="text-sm italic">Co-founder of MyPhysio</p>
            <img
              src="/assets/avatar-arthur.jpg"
              alt=""
              className="h-16 rounded-full ring-2 ring-white"
            />
            <div className="absolute z-0 -top-10">
              <img src="/assets//icon-quotes.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute -top-4 left-0">
          <img src="/assets/bg-pattern-home-4-about-3.svg" alt="" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="/assets/bg-pattern-home-5.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Stories;
