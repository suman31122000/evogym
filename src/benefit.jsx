import { useNavigate } from "react-router-dom";
const Benefit=()=>{
    const object=[{
        name:"State of the Art facilities",
        about:"The pinnacle of modern fitness environments, boasting cutting-edge equipment, advanced technology integration, and luxurious amenities tailored to enhance the overall fitness experience. These facilities offer a diverse range of specialized training areas, including functional training zones, group exercise studios, and dedicated spaces for yoga and Pilates. ",
    },
    {
        name:"100's of Diverse Classes",
        about:"A commitment to providing a wide range of fitness options to cater to the diverse needs, preferences, and fitness goals of members. These classes span various disciplines, including cardio, strength training, flexibility, balance, and mind-body wellness, ensuring that individuals of all fitness levels and interests can find activities that resonate with them. ",
    },
    {
        name:"Eperts and Pro Trainers",
        about:"Knowledgeable professionals dedicated to guiding individuals on their fitness journey, providing expertise, motivation, and support to help clients achieve their wellness goals. These experts typically hold certifications and qualifications in fitness training, nutrition, and specialized areas of exercise science, enabling them to design personalized workout programs tailored to each client's needs, abilities, and objectives",
    }
];
const navigate=useNavigate();
const join=()=>{
    navigate('/membership');
  }
return(
<div id="benefit" className="h-screen w-[100%] text-red-950 bg-red-50 p-5 hidden sm:flex flex-col">
    <div className="h-[17%] w-full flex flex-col flex-wrap">
        <span className="mt-2 text-xl font-bold mx-28">MORE THAN JUST GYM</span>
        <span className="mt-2 mx-28 ">We provide World class fitness equipment, trainee and classes to get you to your ultimate fitness goal with ease . we provide true </span>
        <span className="mt-0 mx-28">care to each and every member </span>
    </div>
    <div className=" h-[40%] w-full flex flex-wrap justify-center ">
        <div className=" grid sm:grid-cols-3 justify-center gap-10 h-72 ">
        {object.map((object)=>(
            <div key={object.name} className="grid grid-flow-row border-2 w-96 h-60 justify-center items-center border-red-950 ">
                <span></span>
            <span className="text-xl flex item-centre justify-center font-bold">{object.name}</span>
            <span className="text-xs mt-0 ">{object.about}</span>
            </div>
        ))}
        </div>
    </div>
    <div className=" h-[43%] w-[100%] flex " >
        <div className=" h-full w-[30%]"style={{ backgroundImage: "url('image5.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} ></div>
        <div className=" h-full w-[70%] flex flex-col mt-16 ml-20">
            <span className="text-2xl font-bold">MILLIONS OF HAPPY MEMBERS GETTING FIT</span>
            <span>Are you ready to join millions of individuals worldwide who are transforming their lives through fitness? At our gym, we're not just a facility—we're a thriving community of motivated individuals committed to getting fit and staying healthy!

Joining our gym means becoming part of a powerful movement dedicated to achieving wellness goals, breaking personal records, and embracing a healthier lifestyle.</span><br/>
<span> With millions of members already on board, you'll be part of a diverse and supportive community that inspires and motivates each other to reach new heights.</span>
            <button onClick={join} className="flex mt-2 bg-yellow-400 h-8 w-28 items-center justify-center rounded-md">Join Now</button>
        </div>
    </div>
</div>
)
}
export default Benefit;