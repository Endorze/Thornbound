type ReusableTextImageProp = {
    title: string
    text: string
    image: string
    reversed?: boolean;
}

const ReusableTextImage = ({ title, text, image, reversed = false }: ReusableTextImageProp) => {
    return (
        <div className="relative bg-black p-4 text-white border-t border-r border-white mb-8 w-full">
            <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} gap-6`}>
                <div className="w-full p-4">

                    <h1 className="pb-3">{title}</h1>
                    <div>{text}</div>
                </div>
                <img src={image} alt="image" className="w-1/2 h-auto p-4" />
            </div>
            <div className="absolute bottom-0 right-0 h-[1px] w-1/2 bg-gradient-to-l from-white to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-white to-transparent" />
        </div>
    )
}

export default ReusableTextImage;
