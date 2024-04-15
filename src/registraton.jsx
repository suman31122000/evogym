import { useState } from "react";

const Register = () => {
    let [state, setState] = useState(1);

    const handlesignin = () => {
        setState(state=1);
    };
    
    const handlesignup = () => {
        setState(state=0);
    };

    return (
        <div className="h-screen w-full bg-red-50">
            <div className="h-[10%] w-full flex justify-center items-center gap-6">
                <button className="bg-yellow-400 rounded-md h-8 w-20" onClick={handlesignin}>SIGN IN</button>
                <span>Sign In or Sign Up</span>
                <button className="bg-yellow-400 rounded-md h-8 w-20" onClick={handlesignup}>SIGN UP</button>
            </div>
            <div className="h-[70%] w-full flex justify-center items-center">
                {state === 1 ? (
                    <div className="h-[80%] w-[30%] border-4 p-10">
                        <form className="h-full w-full flex flex-col items-center gap-10">
                            <input type="text" placeholder="PHONE NUMBER" className="bg-red-400 w-[99%] h-10  placeholder-white pl-4"/>
                            <input type="text" placeholder="EMAIL" className="bg-red-400 w-[99%] h-10  placeholder-white pl-4"/>
                            <input type="password" placeholder="PASSWORD" className="bg-red-400 w-[99%] h-10  placeholder-white pl-4"/>
                            <button type="submit" className="bg-yellow-400 rounded-md h-8 w-20">SIGN IN</button>
                        </form>
                    </div>
                ) : (
                    <div className="h-[95%] w-[30%] border-4 p-10 ">
                        <form className="h-full w-full flex flex-col items-center gap-10">
                            <input type="text" placeholder="NAME" className="bg-red-400 w-[99%] h-10 placeholder-white pl-4"></input>
                            <input type="text" placeholder="PHONE NUMBER" className="bg-red-400 w-[99%] h-10  placeholder-white pl-4"/>
                            <input type="text" placeholder="EMAIL" className="bg-red-400 w-[99%] h-10  placeholder-white pl-4"/>
                            <input type="password" placeholder="PASSWORD" className="bg-red-400 w-[99%] h-10  placeholder-white pl-4"/>
                            <button type="submit" className="bg-yellow-400 rounded-md h-8 w-20">SIGN IN</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
