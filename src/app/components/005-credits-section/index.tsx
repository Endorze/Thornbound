import Image from "next/image";

const CreditsSection = () => {
  return (
    <div className="relative w-full h-[800px] bg-[url('/Background.png')] bg-cover bg-center text-white">
      <h1 className="absolute left-[495px] top-[195px] text-[100px] font-[400] leading-[135px] text-center font-cinzel border border-black shadow-[0_0_16px_rgba(0,0,0,0.8)] w-[449px] h-[135px]">
        CREDITS
      </h1>

      <div className="absolute left-[88px] top-[400px] w-[1264px] h-[623px] bg-black/40 backdrop-blur-md shadow-[4px_4px_12px_rgba(0,0,0,0.8)] flex">
        <div className="p-6 w-[612px] h-[420px] mt-[127px] ml-[40px] text-[20px] leading-[28px] font-vollkorn text-justify">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  
          <br /><br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  
          <br /><br />
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...
        </div>

        <div className="absolute w-[532px] h-[375px] top-[127px] left-[692px]">
          <Image
            src="/Checker.png"
            alt="Credits Illustration"
            width={532}
            height={375}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditsSection;




