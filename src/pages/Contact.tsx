const Contact = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-[90%] p-4 mt-24">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-mart-yellow">
                                In Progress
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-mart-yellow">
                                70%
                            </span>
                        </div>
                    </div>
                    <div className="flex rounded-full h-2 bg-gray-200">
                        <div className="w-[70%] rounded-full bg-mart-yellow"></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;