import TransparentContainer from "../components/TransparentContainer/TransparentContainer";

export default function Lore() {
  return (
    <main className="min-h-screen bg-black -400 flex flex-col items-center justify-center p-8 text-white">
      
      <h2 className="text-[64px] font-normal text-center mb-10">LORE</h2>
      <TransparentContainer>
        <p className="text-[20px] leading-relaxed text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum iusto error aperiam corrupti, recusandae, ipsam amet perferendis ullam ea nisi,
          <br />
          nesciunt fuga quasi optio? Quam in nemo nobis
        </p>
      </TransparentContainer>
  
    </main>
  );
}

