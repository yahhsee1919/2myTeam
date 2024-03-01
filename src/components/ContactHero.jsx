import Form from "./Form";

function ContactHero() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto  pb-44  text-center text-white bg-midnightGreen   relative overflow-hidden  lg:flex-row lg:space-y-0 lg:pt-12 ">
      <div className="">
        <h1 className="text-4xl p-4 font-bold mx-auto tracking-wide max-w-md lg:text-6xl  ">
          Contact
        </h1>
        <h1 className="text-2xl p-4 font-bold mx-auto tracking-wide text-lightCoral max-w-md lg:text-4xl ">
          Ask us about
        </h1>
        <div className="flex flex-col items-center justify-center space-y-24 px-6 lg:flex-row lg:space-y-0 lg:space-x-16 lg:items-start lg:pt-16">
          <div className="flex flex-col items-center justify-center space-y-10 pt-12 lg:pt-0 ">
            <div className="flex  items-center justify-between mx-auto space-x-6 text-start ml-0">
              <img src="/assets/icon-person.svg" alt="" />

              <p className="leading-7 mx-auto font-semibold text-lg  ">
                The quality of out talent network
              </p>
            </div>
            <div className="flex  items-center  justify-between mx-auto space-x-6 text-start ml-0 ">
              <img src="/assets/icon-cog.svg" alt="" />

              <p className="leading-7  max-w-sm mx-auto font-semibold text-lg lg:text-left md:max-w-lg ">
                Usage & implementation of our software
              </p>
            </div>
            <div className="flex  items-center  justify-between mx-auto space-x-6 text-start ml-0 ">
              <img src="/assets/icon-chart.svg" alt="" />

              <p className="leading-7  max-w-sm mx-auto font-semibold text-lg lg:text-left md:max-w-lg ">
                How we help drive innovation
              </p>
            </div>
          </div>
          {/* form */}
          <Form />
        </div>
      </div>

      <div className="absolute scale-150 -bottom-24 -right-24  ">
        <img src="/assets/bg-pattern-contact-2.svg" alt="" />
      </div>
    </div>
  );
}

export default ContactHero;
