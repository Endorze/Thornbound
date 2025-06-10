import ReusableTextImage from "../../006-Resusable-Text-Image"


const TextImage = () => {
    return (
        <div className="relative bg-black p-4 text-white border-t border-r border-white">
            <ReusableTextImage
                title="Andrew.k(Developer)"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image="./image.png"
            />
            <div className="absolute bottom-0 right-0 h-[1px] w-1/2 bg-gradient-to-l from-white to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-white to-transparent" />
        </div>
    )
}

export default TextImage

