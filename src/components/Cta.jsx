import { Link } from "react-router-dom";

function Cta() {
  return (
    <div className="bg-lightCoral relative">
      <div className="flex flex-col items-center justify-between pb-32 pt-24 mx-auto max-w-7xl text-center space-y-6 text-sacramentoGreen  overflow-hidden md:flex-row md:space-y-0 md:px-24">
        <h1 className="text-2xl font-bold md:text-4xl">
          Ready to get started?
        </h1>
        <Link
          to="/contact"
          className="px-8 py-4 font-bold rounded-full border-2 border-sacramentoGreen text-sacramentoGreen md:text-xl hover:bg-sacramentoGreen hover:text-white"
        >
          contact us
        </Link>
        <div className="absolute bottom-0 left-0">
          <img src="/assets/bg-pattern-home-6-about-5.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cta;
