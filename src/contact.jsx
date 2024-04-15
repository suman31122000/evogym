const Contact=()=>{
    return(
        <div id="contact" className="h-[28vh] w-full grid sm:grid-cols-12 grid-cols-1 bg-red-200">
            <div className=" h-full col-span-5 flex flex-col gap-3 pt-5 bg-red-200">
                <span className="text-xl font-semibold sm:px-20">EVOGYM</span>
                <span className="sm:px-20">Evo Gym is a premier fitness facility dedicated to providing a comprehensive and transformative fitness experience for its members. With state-of-the-art equipment, expert trainers, and a supportive community atmosphere.</span>
                <span className="sm:px-20 ">@ Evogym All Rights Reserved</span>
            </div>
            <div className=" h-full col-span-2 flex flex-col gap-3 pt-5 sm:items-center bg-red-200">
                <span className="text-xl font-semibold">Links</span>
                <span>Gym location</span>
                <span>Gym image</span>
                <span>Gym results</span>
            </div>
            <div className=" h-full col-span-5 flex flex-col gap-3 pt-5 sm:items-center bg-red-200">
                <span className="text-xl font-semibold">Contact Us</span>
                <span>Babapath Hurhurhu Hazaribagh</span>
                <span>+91 8524679132</span>
            </div>
        </div>

    )
}
export default Contact;