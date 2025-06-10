type ReusableTextImageProp = {
    text: string
    image: string
}

const ReusableTextImage = ({text, image}:ReusableTextImageProp) => {
    return (
        <>
        <h1>{text}</h1>
        <div>{text}</div>
        <div>{text}</div>
        <div>{text}</div>
        <div>{text}</div>
        <img src={image} alt="image" />
        </>

    )
}

export default ReusableTextImage