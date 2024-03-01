function Form() {
  return (
    <div className="flex flex-col space-y-12 w-full mx-auto lg:w-1/2 text-left">
      <form action="" className="flex flex-col mx-auto space-y-4 ">
        <input type="text" placeholder="name" className="inputClass" />
        <input type="text" placeholder="Email Address" className="inputClass" />
        <input type="text" placeholder="Company Name" className="inputClass" />
        <textarea
          type="text"
          rows="2"
          placeholder="Message"
          className="inputClass h-20"
        />
      </form>
      <button className="mt-12 px-12 w-44 py-4 font-semibold text-xl rounded-full bg-white text-darkGreen hover:bg-lightCoral">
        submit
      </button>
    </div>
  );
}

export default Form;
