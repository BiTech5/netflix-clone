export const Question = () => {
    return (
        <div className="text-white font-bold px-4 sm:px-8 md:px-12 py-6 sm:py-10 text-2xl sm:text-3xl md:text-4xl">
            Frequently Asked Questions
            <div className="mt-6 flex flex-col gap-4 sm:gap-6">
                {[
                    "What is Netflix?",
                    "How much does Netflix cost?",
                    "Where can I watch?",
                    "How do I cancel?",
                    "What can I watch on Netflix?",
                    "Is Netflix good for kids?",
                ].map((question, index) => (
                    <button
                        key={index}
                        className="bg-black/50 rounded-xl sm:rounded-2xl w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex justify-between items-center text-lg sm:text-xl hover:bg-white/20 transition duration-300 ease-in-out"
                    >
                        <span className="flex-1">{question}</span>
                        <span className="text-3xl sm:text-4xl font-thin ml-4">+</span>
                    </button>
                ))}
            </div>
        </div>

    )
}