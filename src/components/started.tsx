export const Started = () => {
    return (
        <div className="grid grid-rows-2 gap-4 sm:gap-6 sm:grid-cols-[2fr_1fr] w-full max-w-2xl">
            <input
                type="email"
                className="bg-gray-700/90 placeholder-gray-300 rounded-full text-base sm:text-lg md:text-2xl px-4 sm:px-6 py-2 outline-white text-white placeholder:text-sm w-full"
                placeholder="Email address"
            />
            <button
                className="bg-[#e50914] px-4 sm:px-6 py-2 text-base sm:text-lg md:text-2xl font-bold rounded-full whitespace-nowrap hover:bg-red-600 w-full sm:w-fit">
                Get Started {'>'}
            </button>
        </div>

    )
}