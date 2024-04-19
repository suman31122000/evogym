import React from 'react';

const Paid = () => {
    const array = [
        {
            name: "Basic",
            Price: 5,
            Activities: "Running",
        },
        {
            name: "Advanced",
            Price: 10,
            Activities: "Weightlifting",
        },
        {
            name: "Premium",
            Price: 20,
            Activities: "Weightlifting-Running",
        },
        {
            name: "Luxury",
            Price: 30,
            Activities: "All",
        }
    ];

    return (
        <div className='h-screen w-full flex flex-col ' style={{ backgroundImage: 'url("image10.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='h-[15%] w-full flex justify-center pt-10'>
                <span className='text-4xl font-semibold'>Choose your Package<span className='text-yellow-300'> To Achieve your Goal </span></span>
            </div>
            <div className='flex justify-center items-center gap-10 h-[85%] w-full'>
                {array.map((data, index) => (
                    <div key={index} className='flex flex-col border-4 border-x-yellow-400 h-[70%] w-60 flex-wrap items-center pt-10 hover:bg-slate-950 '>
                        <span className='text-2xl font-semibold p-4 text-white '>{data.name}</span>
                        <span className='text-xl font-semibold p-4 text-white'>$ {data.Price}</span>
                        <span className='text-xl  p-4 pb-10 text-white'>{data.Activities}</span>
                        <button className="flex mt-2 bg-yellow-400 h-8 w-28 items-center justify-center rounded-md text-white">JOIN NOW</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paid;
