type ReusableTextImageProp = {
    title: string
    text: string
    image: string
}

const ReusableTextImage = ({ title, text, image }: ReusableTextImageProp) => {
    return (
        <div className="flex gap-4">
            <div className="w-1/2 p-4">
                <h1 className="pb-3">{title}</h1>
                <div>{text}</div>
            </div>
            <img src={image} alt="image" className="w-1/2 h-auto p-4" />
        </div>
    )
}

export default ReusableTextImage
