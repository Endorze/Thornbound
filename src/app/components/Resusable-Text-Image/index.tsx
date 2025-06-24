import { DataFileProp } from "../../../data/dataFile";

type ReusableTextImageProp = DataFileProp & {
  reversed?: boolean;
}

const ReusableTextImage = ({ name, description, image, video, reversed = false }: ReusableTextImageProp) => {
    return (
        <div className="relative bg-black p-4 text-white border-t border-r border-white mb-8 w-full">
            <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} gap-6`}>
                <div className="w-full p-4">

                    <h2 className="pb-3">{name}</h2>
                    <div>{description}</div>
                </div>

                {image ? (
                    <img src={image} alt="image" className="w-1/2 h-auto p-4" />

                ) : video ? (
                    <video src={video} controls className="lg:w-1/2 w-full p-4"
 />
                ) : null}
            </div>
            <div className="absolute bottom-0 right-0 h-[1px] w-1/2 bg-gradient-to-l from-white to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-white to-transparent" />
        </div>
    )
}

export default ReusableTextImage;

