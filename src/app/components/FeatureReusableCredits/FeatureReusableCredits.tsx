import TransparentContainer from "@/app/components/TransparentContainerReusable";

export default function FeatureReusableCredits() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-4 flex justify-center">
      <TransparentContainer className="w-full max-w-4xl p-10">
        <div className="flex flex-col space-y-10">

          <p className="text-left leading-relaxed">
            Our team consists of passionate designers, programmers, and artists who have collaboratively shaped Thornbound. With diverse skills and international talent, we crafted this experience through months of creativity, iteration, and dedication.
          </p>

          <img
             src="./image/groupphoto.png"
            alt="Group Photo"
            className="w-full rounded-md object-cover"
          />

          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col space-y-4 text-left text-white">
              <h3 className="text-2xl font-semibold">Developer team</h3>
              <p className="underline">Leon Cederberg (Product Owner & Designer)</p>
              <p className="underline">Alejandro Hernandez Cortina (Narrative & Level Designer)</p>
              <p className="underline">Simon Finér (Designer)</p>
              <p className="underline">Ghazaleh Shahabirad (Designer)</p>
              <p className="underline">Ilya Antoshkin (Environment Artist / Technical Artist)</p>
              <p className="underline">Evangelina Bakasi (Artist)</p>
              <p className="underline">Barry Chen (Art Director & Animator)</p>
              <p className="underline">Shengan Peng (Animation & VFX)</p>
              <p className="underline">Eric Ivar Persson (VFX Artist)</p>
              <p className="underline">Brian-Lucas Morar (Programmer)</p>
              <p className="underline">Doruk Şaşmaz (Game Programmer, Sound Programmer)</p>
              <p className="underline">Galina Syrodoeva (Programmer)</p>
              <p className="underline">Jamie Kofler (Programmer)</p>
            </div>

            <div className="flex flex-col space-y-4 text-left text-white">
              <h3 className="text-2xl font-semibold">Management team</h3>
              <p className="underline">Aida Ghorban Ebrahimi (Game Producer & Release Manager)</p>
              <p className="underline">Ola Gerdin (Release Manager)</p>
              <p className="underline">Lotten Attlin (Project Manager & Scrum Master)</p>
            </div>
          </div>
        </div>
      </TransparentContainer>
    </section>
  );
}
