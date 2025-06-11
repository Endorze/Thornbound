type Props = {
    title?: string,
    mainHero: boolean,
}

const ReusableHero = ({title, mainHero}: Props) => {
    return (
        <div className="hidden lg:flex bg-[url('/herolotus.png')] bg-cover bg-center w-full min-h-screen  text-white justify-center relative pt-12 pb-24">
            {mainHero && (
                <div className="max-w-[900px] flex flex-col justify-center items-center">
                    <img src={"/thornbound.png"} className="max-w-[701px] h-auto"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quaerat provident animi fuga, corrupti iure possimus asperiores ab vitae distinctio sed eum? Commodi repellat, alias officia tenetur laborum accusamus eaque.</p>
                </div>
            )}

            <h2 className="">{title}</h2>
        </div>
    )
}

export default ReusableHero;