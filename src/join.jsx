const Join=()=>{
    return(
    <div className="h-screen w-full  px-20 py-10 flex sm:flex-col">
        <div className="h-[20%] w-full flex flex-col">
            <span className="text-xl font-bold"><span className="text-red-500">JOIN NOW</span> TO GET IN THE SHAPE</span>
            <span className="">Join our gym for a transformative fitness experience like no other! At our gym, we're more than just a place to work out – we're a community dedicated to helping you achieve your health and wellness goals, whatever they may be</span>
        </div>
        <div className="h-[80%] w-full flex flex-col sm:flex-row gap-5">
                <form className="h-full w-[50%] flex flex-col gap-7 ">
                    <input type="text" placeholder="NAME" className="bg-red-400 h-8 placeholder-white p-4" />
                    <input type="text" placeholder="EMAIL" className="bg-red-400 h-8 placeholder-white p-4"/>
                    <input type="text" placeholder="MESSAGE" className="bg-red-400 h-28 placeholder-white p-4"/>
                    <button className="flex mt-2 bg-yellow-400 h-8 w-28 items-center justify-center rounded-md">SUBMIT</button>
                </form>
            <div className="h-full w-6/12 bg-slate-600 " style={{ backgroundImage: "url('imag1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                
            </div>
        </div>
    </div>
    )
}
export default Join;
