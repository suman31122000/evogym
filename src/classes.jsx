import React from 'react';

const Classes = () => {
    const objects = [
        { img: "imag1.jpg", text: "Weightlifting" },
        { img: "imag6.jpg", text: "Yoga" },
        { img: "image2.webp", text: "Streching" },
        { img: "image3.webp", text: "Running" },
        { img: "image5.jpg", text: "Boxing" }
    ];

    return (
        <div id="classes" className="bg-red-100 h-screen w-full">
            <div className="max-w-4xl break-words h-[30%] w-full pl-20 text-red-950">
                <span className="text-2xl font-bold">OUR CLASSES</span>
                <span className="block pt-4">Embark on a holistic fitness journey with our diverse array of classes designed to cater to every fitness level and interest. From heart-pumping Cardio Blast sessions to muscle-sculpting Strength Training, our expert-led classes offer something for everyone.</span><br/>
                <span className="block">Find balance and inner peace in our Yoga and Mindfulness sessions, or push your limits with High-Intensity Interval Training (HIIT).</span>
            </div>
            <div className="h-[50%] w-full flex flex-nowrap overflow-y-scroll no-scrollbar p-8">
                {objects.map((object, index) => (
                    <div key={index} className="relative flex-shrink-0 mr-4">
                        <img src={object.img} className="max-h-full max-w-full" alt={`Image ${index + 1}`} />
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 transition duration-300 opacity-0 hover:opacity-70 hover:bg-white">
                            <p className="text-black font-bold text-4xl">{object.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Classes;
