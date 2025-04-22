export const Started = () => {
    return (
        <div className="grid grid-rows-2 gap-4 sm:gap-6 sm:grid-cols-[2fr_1fr] w-full max-w-2xl">
            <div className="relative">
                <input
                    type="email"
                   
                    className="block rounded-full px-4 pb-2.5 pt-5 w-full text-sm text-white bg-gray-700 border-0 border-b-2 border-gray-600 appearance-none focus:outline-none  peer"
                    placeholder=" "
                />
                <label
                    
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "
                >
                    Email address
                </label>
            </div>

            <button
                className="bg-myredd btn text-lg sm:text-xl md:text-2xl font-bold rounded-full whitespace-nowrap hover:bg-red-600 w-full sm:w-fit py-6">
                Get Started {'>'}
            </button>
        </div>

    )
}