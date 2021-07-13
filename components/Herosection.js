function Herosection() {
    return (
        <div className="h-screen w-full bg-hero-pattern bg-center bg-cover bg-fixed flex
        flex-col justify-center px-6 ">
            <div className="">
                <h2 className="text-2xl text-white opacity-70 py-2">Welcome to</h2>
                <h1 className="text-7xl text-white py-2">TIZIKI</h1>
                <p className="text-xl text-white py-2">Made by Kenyans for Everyone</p>
                <button className="py-2 px-4 mt-3 text-black bg-white hover:bg-red-500 hover:text-white">Listen Now</button>
            </div>
        </div>
    )
}

export default Herosection
