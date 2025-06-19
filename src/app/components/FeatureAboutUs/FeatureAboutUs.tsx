import TransparentContainer from "@/app/components/TransparentContainerReusable";

export default function FeatureAboutUs() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-4 flex justify-center">
      <TransparentContainer className="w-full max-w-6xl p-6 md:p-10">
        <div className="flex flex-col space-y-10">

          {/* Intro text */}
          <p className="text-left leading-relaxed text-sm sm:text-base">
            Our team consists of passionate designers, programmers and artists who have together shaped Thornbound. With diverse skills and international talent, we created this experience through months of creativity, iteration and dedication.
          </p>

          {/* Image */}
          <img
            src="/grouppic.jpg"
            alt="Group Photo"
            className="w-full mx-auto rounded-md object-cover"
          />

          {/* Teams */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            
            {/* Development Team */}
            <div className="flex-1 flex flex-col space-y-2 text-left">
              <h3 className="text-2xl font-semibold">Development Team</h3>
              {[
                "Leon Cederberg (Product Owner and Designer)",
                "Alejandro Hernandez Cortina (Narrative and Level Designer)",
                "Simon Finér (Designer)",
                "Ghazaleh Shahabirad (Designer)",
                "Ilya Antoshkin (Environment Artist / Technical Artist)",
                "Evangelina Bakasi (Artist)",
                "Barry Chen (Art Director and Animator)",
                "Shengan Peng (Animation and Visual Effects)",
                "Eric Ivar Persson (VFX Artist)",
                "Brian-Lucas Morar (Programmer)",
                "Doruk Şaşmaz (Game Programmer, Sound Programmer)",
                "Galina Syrodoeva (Programmer)",
                "Jamie Kofler (Programmer)"
              ].map((name, idx) => (
                <p key={idx} className="underline text-sm sm:text-base">{name}</p>
              ))}
            </div>

            {/* Leadership Team */}
            <div className="flex-1 flex flex-col space-y-2 text-left">
              <h3 className="text-2xl font-semibold">Leadership Team</h3>
              {[
                "Aida Ghorban Ebrahimi (Game Producer and Release Manager)",
                "Ola Gerdin (Release Manager)",
                "Lotten Attlin (Project Manager and Scrum Master)"
              ].map((name, idx) => (
                <p key={idx} className="underline text-sm sm:text-base">{name}</p>
              ))}
            </div>
          </div>
        </div>
      </TransparentContainer>
    </section>
  );
}
