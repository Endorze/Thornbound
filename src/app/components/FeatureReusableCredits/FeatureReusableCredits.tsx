export default function FeatureReusableCredits() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-2xl mx-auto flex flex-col space-y-10">
        
        <h1 className="text-5xl font-serif text-center">ABOUT US</h1>
        <p className="text-left leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br />
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img
          src="/images/angel.png"
          alt="Group Photo"
          className="w-full rounded-md object-cover"
        />
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col space-y-4 text-left text-white">
            <h3 className="text-2xl font-semibold">Developer team</h3>
            <p className="underline">Rafael Wiking (Designer)</p>
            <p className="underline">(Full Name)(Role)</p>
            <p className="underline">(Full Name)(Role)</p>
            <p className="underline">(Full Name)(Role)</p>
            <p className="underline">(Full Name)(Role)</p>
            <p className="underline">(Full Name)(Role)</p>
          </div>

          <div className="flex flex-col space-y-4 text-left text-white">
            <h3 className="text-2xl font-semibold">Management team</h3>
            <p className="underline">(Full Name)(Role)</p>
            <p className="underline">(Full Name)(Role)</p>
            <p className="underline">(Full Name)(Role)</p>
          </div>
        </div>
      </div>
    </section>
  );
}