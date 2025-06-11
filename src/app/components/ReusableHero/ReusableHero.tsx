import DownloadButton from "../DownloadButton/DownloadButton";

type Props = {
    title?: string,
    mainHero: boolean,
}

const ReusableHero = ({title, mainHero}: Props) => {
    return (
        <div className="flex bg-[url('/herolotus.png')] bg-cover bg-center w-full h-[700px]  text-white justify-center relative pt-12 pb-24 px-2">
            {mainHero && (
                <div className="max-w-[900px] flex flex-col justify-center items-center">
                    <img src={"/thornbound.png"} className="lg:max-w-[701px] h-auto"/>
                    <p className="mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quaerat provident animi fuga, corrupti iure possimus asperiores ab vitae distinctio sed eum? Commodi repellat, alias officia tenetur laborum accusamus eaque.</p>
                    <DownloadButton />
                </div>
            )}
            <h2 style={{fontSize: "104px"}} className="flex items-center">{title}</h2>
        </div>
    )
}

export default ReusableHero;