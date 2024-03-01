function Features() {
  return (
    <div className="bg-sacramentoGreen ">
      <div className="flex flex-col items-center-justify-center pb-20 pt-12  mx-auto max-w-7xl  text-center text-white  p-6 space-y-4  relative overflow  lg:flex-row lg:space-y-0 lg:space-x-12 lg:pt-32 lg:pr-32">
        <h1 className="py-4 text-2xl font-bold w-[60%] text-start  md:text-3xl  md:w-[70%] lg:w-[50%]">
          Build & manage distributed teams like no one alse
        </h1>
        <div className="absolute -top-7 -right-28 ">
          <img
            src="/assets/bg-pattern-home-3.svg"
            className="scale-90"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-10 pt-12 lg:pt-0">
          <div className="flex flex-col items-center justify-center mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-12 md:text-start md:ml-0 ">
            <img src="/assets/icon-person.svg" alt="" />
            <div className="md:space-y-3">
              <p className="text-xl px-6 font-semibold text-lightCoral md:px-0">
                Experienced Individuals
              </p>
              <p className="leading-7  max-w-sm mx-auto lg:text-lg lg:text-left md:max-w-lg ">
                Out network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-12 md:text-start md:ml-0 ">
            <img src="/assets/icon-cog.svg" alt="" />
            <div className="md:space-y-3">
              <p className="text-xl px-6 font-semibold text-lightCoral md:px-0">
                Easy to Implement
              </p>
              <p className="leading-7  max-w-sm mx-auto lg:text-lg lg:text-left md:max-w-lg ">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-12 md:text-start md:ml-0 ">
            <img src="/assets/icon-chart.svg" alt="" />
            <div className="md:space-y-3">
              <p className="text-xl px-6 font-semibold text-lightCoral md:px-0">
                Enchanced Productivity
              </p>
              <p className="leading-7  max-w-sm mx-auto lg:text-lg lg:text-left md:max-w-lg ">
                Our customized platform with in-build analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
