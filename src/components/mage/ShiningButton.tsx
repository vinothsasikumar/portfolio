const ShiningButton = (props: any) => {
    return (
        <button className={`group cursor-pointer rounded-xl border-2 border-${props.color} border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100`}>
            <div className={`relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-${props.color} px-6 py-4 font-bold text-${props.labelcolor}`}>
                {props.label}
                {props.icon}
            </div>
        </button>
    );
}

export default ShiningButton;