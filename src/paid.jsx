import React from 'react';

const Paid = () => {
    const array = [
        {
            name: "Basic",
            Price: 500,
            Activities: "running",
        },
        {
            name: "Advanced",
            Price: 1000,
            Activities: "weightlifting",
        },
        {
            name: "Premium",
            Price: 2000,
            Activities: "weightlifting-running",
        },
        {
            name: "Luxury",
            Price: 3000,
            Activities: "all",
        }
    ];

    return (
        <div className='h-screen w-full flex flex-col bg-red-50'>
            <div className='h-[15%] w-full flex justify-center pt-10'>
                <span className='text-4xl font-semibold'>Choose your Package<span className='text-yellow-300'> To Achieve your Goal </span></span>
            </div>
            <div className='flex justify-center items-center gap-10 h-[85%] w-full'>
                {array.map((data, index) => (
                    <div key={index} className='flex flex-col border-4 h-[70%] w-60 flex-wrap items-center pt-10 hover:bg-yellow-100'>
                        <span className='text-2xl font-semibold p-4'>{data.name}</span>
                        <span className='text-xl font-semibold p-4'>{data.Price}</span>
                        <span className='text-xl  p-4 pb-10'>{data.Activities}</span>
                        <button className="flex mt-2 bg-yellow-400 h-8 w-28 items-center justify-center rounded-md">JOIN NOW</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paid;
