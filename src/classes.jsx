import { useEffect } from "react";
const Classes = () => {
    const objects = [
        { img: "imag1.jpg" },
        { img: "imag6.jpg" },
        { img: "image2.webp" },
        { img: "image3.webp" },
        { img: "image5.jpg" }
    ];

    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
            top:0,
          left: container.scrollTop + scrollAmount,
          behavior: 'smooth'
        });
    };
    

    return (
        <div id="classes" className="bg-red-100 h-screen w-full">
            <div className="max-w-4xl break-words h-[30%] w-full pl-20 text-red-950">
                <span className="text-2xl font-bold">OUR CLASSES</span>
                <span className="block pt-4">Embark on a holistic fitness journey with our diverse array of classes designed to cater to every fitness level and interest. From heart-pumping Cardio Blast sessions to muscle-sculpting Strength Training, our expert-led classes offer something for everyone.</span><br/>
                <span className="block">Find balance and inner peace in our Yoga and Mindfulness sessions, or push your limits with High-Intensity Interval Training (HIIT).</span>
            </div>
            <div className="h-[50%] w-full flex flex-nowrap overflow-y-scroll no-scrollbar p-8">
                {objects.map((object, index) => (
                    <div key={index} className="flex-shrink-0 mr-4"  onWheel={handleScroll}>
                        <img src={object.img} className="max-h-full max-w-full" alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Classes;
