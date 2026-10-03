import "../index.css";

function Navbar() {
    return (
        <div>
        <nav className="relative w-full text-white flex items-center px-4 p-3">
            <div class="flex items-center mr-6">
                <span class="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                <span class="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
                <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <h1 className="text-1xl font-bold text-gray-800">Kaatdelink.in</h1>
        </nav>

        <div className="flex flex-row flex-nowrap gap-2 w-full h-15 border border-gray-200 rounded-ls text-white mt-1">
            <span><img className="w-8 h-8 p-0.5 ml-4 mt-2.5" src="https://i.ibb.co/BH8kZGD2/logo.png" alt="" /></span>
            <span><img className=" h-10 p-1 mt-1" src="https://i.ibb.co/JRw3gMw5/Untitled-October-03-2026-at-19-19-05.png" alt="" /></span>
            <span className = "bg-black h-8 mt-2.5 border rounded-xl p-0.5 ml-auto mr-5 pl-1.5 pr-1.5">no login required.</span>
        </div>

        </div>
        
    )
}
export default Navbar;