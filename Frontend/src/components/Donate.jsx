import { Link } from "react-router-dom";
import Header from "./Header";


function Donate() {

  return (<>

    <Header />
    <div className="  bg-gray-100 h-16 ">
    </div>

    <div className="flex justify-between py-4 bg-red-100">
      <div className=" flex  moveRight ">
        <div className="mx-4 my-2 h-[30px] w-[30px] bg-black morph  border-8 hover:border-yellow-800 "></div>
        <div className=" my-2 h-[30px] w-[30px]  morph bg-white  border-8 hover:border-yellow-800"></div>
      </div>
      <div className=" flex  MoveLeft ">
        <div className="mx-4 my-2 h-[30px] w-[30px] bg-black morph  border-8 hover:border-yellow-800"></div>
        <div className="my-2 h-[30px] w-[30px]  morph bg-white  border-8 hover:border-yellow-800"></div>

      </div>
    </div>
    <div className="min-h-screen bg-gradient-to-r from-red-300 via-pink-300 to-yellow-300 animate-gradient 
flex items-center justify-center p-6">


      <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center text-center px-6 ">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Donate Blood, Save Lives ❤️</h1>
        <p className="max-w-2xl text-gray-700 mb-8">
          Every drop counts. Your blood can bring hope to someone in need.
          Join us today and make a life-saving difference.
        </p>
        <Link to="/register?">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Register to Donate
          </button>
        </Link>

      </div>



    </div>

  </>)
}
export default Donate;


