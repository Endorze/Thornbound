import TransparentContainer from "../components/TransparentContainer/TransparentContainer";

export default function Lore() {
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <TransparentContainer
        title="LORE"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tempor..."
        imageSrc="/placeholder.png" // Or your real image path
        className="max-w-3xl"
      />
    </div>
  );
}
