import { Link } from "react-router-dom";

function Errorr() {
    return (<>


        <div className=" my-[8px] flex flex-col items-center text-[100px] bg-red-100 w-screen h-screen  ">

            <h1 className="text-[250px] font-bold  bg-gradient-to-r from-red-500 via-blue-500 to-green-500 text-transparent bg-clip-text">404</h1>

            <p className="text-[100px]">Oops! Page Not Found </p>
            <p className="text-[30px]">Sorry the page you are looking for doesn't exist</p>
            <p>

                <Link to="/">
                <button className="bg-gray-200 text-[25px] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-300 hover:shadow-lg transition">
                    Return Home
                </button>
                </Link>
            </p>


        </div>



    </>)
}

export default Errorr;