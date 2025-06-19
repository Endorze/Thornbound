import DownloadButton from "../DownloadButton/DownloadButton";

type Props = {
    title?: string,
    mainHero: boolean,
}

const ReusableHero = ({ title, mainHero }: Props) => {
    return (
        <div className="flex bg-[url('/herolotus.png')] bg-cover bg-center w-full h-[700px] text-white justify-center relative pt-12 pb-24 px-12">
            {mainHero ? (
                <div className="max-w-[900px] flex flex-col justify-center items-center">
                    <img src={"/images/thornlogo.png"} className="lg:max-w-[701px] h-auto" />
                    <p className="mb-12">
                        Thornbound is a stunning new game with rich atmosphere and style.
                        Totally free to download—experience it for yourself today.
                    </p>
                    <DownloadButton />
                    <h1 className="">Download Thornbound today.</h1>
                </div>
            ) : (
                <h1 style={{ fontSize: "92px" }} className="flex items-center">{title}</h1>
            )}
        </div>
    )
}

export default ReusableHero;
