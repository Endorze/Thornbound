type Props = {
    text: string,
    size: string,
}

const H1Title = ({text, size = "100px"}: Props) => {
    return (
        <h1 style={{ fontSize: size }} className="text-white">{text}</h1>
    )
}

export default H1Title;