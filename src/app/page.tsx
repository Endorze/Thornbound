
import ReusableH3Title from "./components/ReusableH3Title/ReusableH3Title";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Sex laxar i en laxask</h1>

      {/* ✅ Your Reusable H3 section */}
      <section className="bg-black p-6 w-full max-w-4xl rounded-xl shadow-md">
        <ReusableH3Title>Lorem Ipsum</ReusableH3Title>
        <p className="text-gray-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. ....
        </p>
      </section>
    </div>
  );
}
