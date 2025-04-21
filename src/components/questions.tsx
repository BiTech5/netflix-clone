export const Question=()=>{
    return(
        <div className="text-white font-bold text-4xl px-12 py-6">
            Frequently Asked Questions
            {[
            "What is Netflix?",
            "How much does Netflix cost?",
            "Where can I watch?",
            "How do I cancel?",
            "What can I watch on Netflix?",
            "Is Netflix good for kids?"
            ].map((question, index) => (
            <button
                key={index}
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>{question}</span>
                <span>+</span>
            </button>
            ))}
        </div>
    )
}