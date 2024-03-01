import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-darkGreen">
      <div className="grid items-center justify-center gap-4 pb-20 text-white text-center mx-auto max-w-6xl  pt-20 p-6 md:grid-cols-2 lg:grid-cols-3 md:items-start">
        <div className="flex flex-col space-y-4">
          <h1 className=" font-bold text-3xl md:text-left md:pb-12 lg:text-4xl lg:pb-8">
            myteam
          </h1>
          <div className="flex space-x-6 mx-auto font-semibold md:mx-0">
            <Link to="/about" className="hover:text-lightCoral ">
              About
            </Link>
            <Link to="/contact" className="hover:text-lightCoral">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-1 text-gray-600 md:text-right lg:text-left lg:-ml-24">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, Ca</p>
          <p>California 92714</p>
          <p>Call us: 949-833-7432</p>
        </div>
        <div className="flex flex-col space-y-4 pt-8 items-center text-gray-600 md:col-span-2 md:flex-row md:space-y-0 md:justify-between lg:col-span-1 lg:flex-col lg:items-end lg:pt-0 lg:space-y-12">
          {/* logos */}
          <div className="flex  space-x-4 mx-auto md:mx-0">
            <img src="/assets/icon-facebook.svg" alt="" />
            <img src="/assets/icon-pinterest.svg" alt="" />
            <img src="/assets/icon-twitter.svg" alt="" />
          </div>
          {/* Copyright */}
          <p>Copyright &copy; 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
