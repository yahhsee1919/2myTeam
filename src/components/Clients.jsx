function Clients() {
  return (
    <div className="bg-sacramentoGreen relative overflow-hidden py-24 px-6 pb-12 text-white">
      <h1 className="text-3xl text-center font-semibold mx-auto pb-12 tracking-wide  lg:text-5xl ">
        Some of out clients
      </h1>
      <div className="flex flex-col items-center justify-center mx-auto p-10 space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        <img src="/assets/logo-the-verge.png" alt="" className="h-6" />
        <img src="/assets/logo-jakarta-post.png" alt="" className="h-6" />
        <img src="/assets/logo-the-guardian.png" alt="" className="h-6" />
        <img src="/assets/logo-tech-radar.png" alt="" className="h-6" />
        <img src="/assets/logo-gadgets-now.png" alt="" className="h-10" />
      </div>
      <div className="absolute -top-36 -left-28">
        <img src="/assets/bg-pattern-home-3.svg" alt="" />
      </div>
    </div>
  );
}

export default Clients;
