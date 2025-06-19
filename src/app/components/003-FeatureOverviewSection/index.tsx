

import ReusableTextImage from "../Resusable-Text-Image";
import { FeaturesItems   } from "../../../data/dataFile";


const OverviewSection = () => {
    return (
        <>
            <div className="text-center mb-10">
                <h2 className="text-5xl md:text-7xl text-white">OVERVIEW</h2>
            </div>

            <ReusableTextImage

                description="As Zerim, an experienced retired mage who has a young granddaughter Elira with a deadly illness with no working cure. 
                      Find and fight your way through the deathtrap that is Castle Kravia, filled with enemies, traps and puzzles. Unveil the forsaken secrets of previous venturers and the castle itself to get a hold of the rare and protected flower Virellis, said to cure any injury and illness or grant Immortality to whoever consumes it, to save Elira. 
                      Do you think you can make it out alive?"
                video="/images/video.mp4"  
                reversed={false}
            />
        </>
    );
};

export default OverviewSection;