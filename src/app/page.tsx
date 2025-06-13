import TransparentContainerResuseable from "@/app/components/TransparentContainerResuseable/TransparentContainerResuseable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center p-8 sm:p-20">
      <TransparentContainerResuseable>
        <h1 className="text-4xl font-semibold tracking-wide text-center">Sex laxar i en laxask</h1>
      </TransparentContainerResuseable>
    </div>
  );
}
