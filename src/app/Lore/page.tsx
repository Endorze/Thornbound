
import TransparentContainer from "../components/TransparentContainer/TransparentContainer";





export default function Lore() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <TransparentContainer>
        <div className="w-2 h-2 bg-blue-500 rounded-full mb-2"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full mb-2"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </TransparentContainer>
    </div>
  );
}
