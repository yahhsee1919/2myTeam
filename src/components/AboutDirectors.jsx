function AboutDirectors() {
  return (
    <div className="bg-deepJungleGreen relative overflow-hidden py-24 px-6 pb-32 text-white">
      <h1 className="text-3xl text-center font-bold mx-auto pb-12 tracking-wide  lg:text-5xl ">
        Meet the directors
      </h1>
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-3  gap-y-14 md:gap-4 md:gap-y-12">
        {/* card 1 */}
        <div className=" relative flex flex-col items-center justify-center space-y-6 px-6 py-16 bg-darkGreen">
          <img
            src="/assets/avatar-nikita.jpg"
            alt=""
            className="rounded-full ring-2 ring-white w-20"
          />
          <div className="flex flex-col items-center justify-center space-y-1">
            <h1 className="text-xl text-raptureBlue text-center font-bold mx-auto  tracking-wide ">
              Nikita Marks
            </h1>
            <p className="text-md italic">Founder & CEO</p>
          </div>
          <div className="absolute w-16 h-16  rounded-full bg-lightCoral -bottom-8 hover:bg-raptureBlue">
            <div className="w-6  border-2 border-darkGreen absolute top-[50%] left-[32%]"></div>
            <div className="h-6  border-2 border-darkGreen absolute top-[34%] left-[48%]"></div>
          </div>
        </div>
        {/* card 2 */}
        <div className=" relative flex flex-col items-center justify-center space-y-6 px-6 py-16 bg-darkGreen">
          <img
            src="/assets/avatar-christian.jpg"
            alt=""
            className="rounded-full ring-2 ring-white w-20"
          />
          <div className="flex flex-col items-center justify-center space-y-1">
            <h1 className="text-xl text-raptureBlue text-center font-bold mx-auto  tracking-wide ">
              Cristian Duncan
            </h1>
            <p className="text-md italic">Co-founder & COO</p>
          </div>
          <div className="absolute w-16 h-16  rounded-full bg-lightCoral -bottom-8 hover:bg-raptureBlue">
            <div className="w-6  border-2 border-darkGreen absolute top-[50%] left-[32%]"></div>
            <div className="h-6  border-2 border-darkGreen absolute top-[34%] left-[48%]"></div>
          </div>
        </div>
        {/* card 3 */}
        <div className=" relative flex flex-col items-center justify-center space-y-6 px-6 py-16 bg-darkGreen">
          <img
            src="/assets/avatar-cruz.jpg"
            alt=""
            className="rounded-full ring-2 ring-white w-20"
          />
          <div className="flex flex-col items-center justify-center space-y-1">
            <h1 className="text-xl text-raptureBlue text-center font-bold mx-auto  tracking-wide ">
              Cruz Hamer
            </h1>
            <p className="text-md italic">Co-founder & CTO</p>
          </div>
          <div className="absolute w-16 h-16  rounded-full bg-lightCoral -bottom-8 hover:bg-raptureBlue">
            <div className="w-6  border-2 border-darkGreen absolute top-[50%] left-[32%]"></div>
            <div className="h-6  border-2 border-darkGreen absolute top-[34%] left-[48%]"></div>
          </div>
        </div>
        {/* card 4 */}
        <div className=" relative flex flex-col items-center justify-center space-y-6 px-6 py-16 bg-darkGreen">
          <img
            src="/assets/avatar-drake.jpg"
            alt=""
            className="rounded-full ring-2 ring-white w-20"
          />
          <div className="flex flex-col items-center justify-center space-y-1">
            <h1 className="text-xl text-raptureBlue text-center font-bold mx-auto  tracking-wide ">
              Drake Heaton
            </h1>
            <p className="text-md italic">Business Development Lead</p>
          </div>
          <div className="absolute w-16 h-16  rounded-full bg-lightCoral -bottom-8 hover:bg-raptureBlue">
            <div className="w-6  border-2 border-darkGreen absolute top-[50%] left-[32%]"></div>
            <div className="h-6  border-2 border-darkGreen absolute top-[34%] left-[48%]"></div>
          </div>
        </div>
        {/* card 5 */}
        <div className=" relative flex flex-col items-center justify-center space-y-6 px-6 py-16 bg-darkGreen">
          <img
            src="/assets/avatar-griffin.jpg"
            alt=""
            className="rounded-full ring-2 ring-white w-20"
          />
          <div className="flex flex-col items-center justify-center space-y-1">
            <h1 className="text-xl text-raptureBlue text-center font-bold mx-auto  tracking-wide ">
              Griffin Wise
            </h1>
            <p className="text-md italic">Lead Marketing</p>
          </div>
          <div className="absolute w-16 h-16  rounded-full bg-lightCoral -bottom-8 hover:bg-raptureBlue">
            <div className="w-6  border-2 border-darkGreen absolute top-[50%] left-[32%]"></div>
            <div className="h-6  border-2 border-darkGreen absolute top-[34%] left-[48%]"></div>
          </div>
        </div>
        {/* card 6 */}
        <div className=" relative flex flex-col items-center justify-center space-y-6 px-6 py-16 bg-darkGreen">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-xl text-raptureBlue text-center font-bold mx-auto  tracking-wide ">
              Cruz Hamer
            </h1>
            <p className="leading-7  mx-auto px-12 text-center  ">
              "Empowered teams create truly amazing products. Set the north star
              and let them follow it"
            </p>
            <div className="flex space-x-6 mx-auto md:mx-0 pt-4">
              <img src="/assets/icon-twitter.svg" alt="" />
              <img src="/assets/icon-linkedin.svg" alt="" />
            </div>
          </div>
          <div className="absolute w-16 h-16  rounded-full bg-raptureBlue -bottom-8 hover:bg-lightCoral">
            <div className="w-6  border-2 border-darkGreen absolute top-[50%] left-[32%] rotate-45"></div>
            <div className="h-6  border-2 border-darkGreen absolute top-[34%] left-[48%] rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="absolute -top-28 -left-24 scale-110">
        <img src="/assets/bg-pattern-about-2-contact-1.svg" alt="" />
      </div>
      <div className="absolute bottom-0 right-0 scale-110">
        <img src="/assets/bg-pattern-home-4-about-3.svg" alt="" />
      </div>
    </div>
  );
}

export default AboutDirectors;
