import Navbar from "@/components/Navbar2";

const Login = () => {
  return (
    <>
        <Navbar/>
        <div className="flex flex-row mt-8">
            <div>
                <h1 className="mt-16 mx-16 text-[46px] font-extrabold text-gray-700">Find your article,</h1>
                <h1 className="mt-0 mx-16 text-[46px] font-extrabold text-blue-600">Find your peace. <article></article></h1><br></br>
                <p className="mt-4 mx-16 text-lg font-thin text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra commodo dictum. Vestibulum ante ex, cursus a mollis sed, eleifend quis sapien. Vestibulum porttitor turpis sed lectus rhoncus luctus. Aliquam vel arcu sed purus rhoncus posuere. Proin auctor, tellus et dapibus vestibulum.</p>
            </div>
            <div className="flex">
                <img className=" mx-20 mt-12 max-w-[450px] max-h-[400px]" src="/src/e-book.png"></img>
            </div>
        </div>
    </>
  );
};

export default Login;
