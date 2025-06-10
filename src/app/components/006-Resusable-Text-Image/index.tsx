type ReusableTextImageProp = {
    title: string
    text: string
    image: string
}

const ReusableTextImage = ({ title, text, image }: ReusableTextImageProp) => {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="pb-3">{title}</h1>
                <div>{text}</div>
            </div>
            <img src={image} alt="image" className="w-1/2 h-auto p-4" />
        </div>
    )
}

export default ReusableTextImage
