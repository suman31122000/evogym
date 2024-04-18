import Benefit from "./benefit";
import Classes from "./classes";
import Contact from "./contact";
import { Navigate, useNavigate } from "react-router-dom";
const Home=()=>{
  const handlehome=()=>{
    const home=document.getElementById('home');
    home.scrollIntoView({behavior:"smooth"});
  }
  const handlebenefit=()=>{
    const benefit=document.getElementById('benefit');
    benefit.scrollIntoView({behavior:"smooth"});
  }
  const handleclasses=()=>{
    const classes=document.getElementById('classes');
    classes.scrollIntoView({behavior:"smooth"});
  }
  const handleconstactus=()=>{
    const contact=document.getElementById('contact');
    contact.scrollIntoView({behavior:"smooth"});
  }
const navigate=useNavigate();
  const register=()=>{
    navigate('/signin');
  }
  const join=()=>{
    navigate('/membership');
  }
    return(
        <div id="home" className="h-screen w-full flex flex-col " style={{ backgroundImage: "url('imag6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="h-[10%] relative top-0 left-0 w-full flex justify-between ">
        <div className="flex flex-wrap gap-1 ml-20 mt-6">
          <span className="flex mt-1 font-semibold text-3xl">EVOGYM</span>
          <button onClick={handlehome}  className="hover:text-red-800 mt-1 rounded-md sm:h-10 sm:w-24 hidden sm:flex items-center justify-center">Home</button>
          <button onClick={handlebenefit}  className="hover:text-red-800 mt-1 rounded-md sm:h-10 sm:w-24 hidden sm:flex items-center justify-center" >Benefits</button>
          <button onClick={handleclasses}  className="hover:text-red-800 mt-1 rounded-md sm:h-10 sm:w-24 hidden sm:flex items-center justify-center">Our Classes</button>
          <button onClick={handleconstactus}  className="hover:text-red-800 mt-1 rounded-md sm:h-10 sm:w-24 hidden sm:flex items-center justify-center">Contact Us</button>
        </div>
         <div className="flex flex-wrap items-center gap-6 mr-5 mt-8">
          <button onClick={register} className="hover:text-red-800 rounded-md sm:h-10 sm:w-20 hidden sm:flex items-center justify-center">Sign In</button>
          <button onClick={join} className="bg-yellow-300 rounded-md sm:h-10 sm:w-40 hidden sm:flex items-center justify-center">Become a Member</button>
        </div>
      </div>
      <div className="h-screen w-full flex relative" >
        <div className="w-[60%] flex flex-col justify-center ml-20">
          <span className="text-7xl font-bold text-white shadow-6xl shadow-white">EVOGYM</span>
          <span className="text-3xl mt-1 text-red-900 text-red-950">evolutionary fitness</span>
          <span className=" mt-3 text-red-900 text-red-950">Unrivaled Gym Unparalleled Training Fitness Classes, World Class Studios to get the Body Shapes</span>
          <span className=" text-red-900 text-red-950">That you Dream of. Get Your Dream Body Now</span>
          <button onClick={join} className="bg-yellow-300 mt-1 rounded-md h-10 w-40 text-white mt-6">Join Now</button>
        </div>
        <div className="w-[40%]">
        </div>
      </div>

      <div className="bg-grey-200 h-[20%] relative bottom-0 left-0 w-full flex gap-20 items-center">
        <span className="ml-20 text-3xl font-bold text-red-950">Red BULL</span>
        <span className="text-3xl font-bold text-red-950">Forbes</span>
        <span className="text-3xl font-bold text-red-950">Muscle Blaze</span>
      </div>
    </div>
    )
}
export default Home;