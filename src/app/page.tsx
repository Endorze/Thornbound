
import ReusableH3Title from "./components/ReusableH3Title/ReusableH3Title";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Sex laxar i en laxask</h1>
      
       <section className="bg-black p-6 w-full max-w-4xl rounded-xl shadow-md">
        <ReusableH3Title text={"Lorem Ipsum"}/>
        <ReusableH3Title text="Lorem Ipsum" size="28px" />
      </section>
    </div>
  );
}

