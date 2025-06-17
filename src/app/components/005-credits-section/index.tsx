import Image from "next/image";

const CreditsSection = () => {
  return (
    <div className="relative w-full h-auto bg-[url('/herolotus.png')] bg-cover bg-center text-white px-4 py-16">
      <h1 className="text-[48px] md:text-[100px] font-[400] leading-tight font-cinzel text-center mx-auto shadow-[0_0_16px_rgba(0,0,0,0.8)] border border-black w-full max-w-[449px]">
        CREDITS
      </h1>

      <div className="mt-12 bg-black/40 backdrop-blur-md shadow-[4px_4px_12px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-center justify-between p-6 gap-8 max-w-[1264px] mx-auto">
        <div className="w-full lg:w-1/2 text-[16px] md:text-[20px] leading-[28px] font-vollkorn text-justify">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p className="mt-4">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p className="mt-4">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...
          </p>
        </div>

        <div className="w-full lg:w-[532px] h-auto">
          <Image
            src="/images/angel.png"
            alt="Credits Illustration"
            width={532}
            height={375}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditsSection;
