const Test = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container  p-2 mx-auto">
        <div className="  grid grid-cols-1 gap-8 mt-8 lg:grid-cols-4 ">
          <div className="m-1 p-1 bg-slate-400  h-max  rounded-md  ">
            <div className=" flex justify-center">
              <img
                className="rounded-full p-1 w-52 h-52"
                src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              ></img>
            </div>
            <div className="container px-2 ">
              <div className=" p-2 bg-slate-200 rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  All the features you want to know
                </a>

                <p classNameName="w-auto h-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p classNameName="w-auto h-auto">21 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
