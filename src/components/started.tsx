export const Started = () => {
    return (
        <div className="grid grid-rows-2 gap-6 md:grid-cols-2">
            <input type="email"
                className="bg-gray-700/90 placeholder-gray300 rounded-full text-2xl px-6 py-2 outline-white text-white placeholder:text-sm "
                placeholder="Email address" />
            <button
                className="bg-[#e50914] px-6 py-2 text-2xl font-bold rounded-full whitespace-nowrap hover:bg-red-600 w-fit">Get
                Started {'>'} </button>
        </div>
    )
}