import DownloadButton from "../DownloadButton/DownloadButton";

export default function ThornboundFooter() {
  return (
    <footer className="bg-black py-16 px-8">
      <div className="flex flex-col lg:flex-row lg:max-w-6xl mx-auto items-center justify-between">

        <div className="flex-shrink-0">
          <img 
            src="/images/thornlogo.png" 
            alt="Thornbound" 
            className="h-20 w-auto"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-white mb-6" style={{ fontFamily: 'Almendera', fontSize: '32px' }}>
            Play the game now!
          </h2>
          <DownloadButton />
        </div>

        <div className="pt-4 lg:flex-shrink-0 text-right">
          <div className="mb-4">
            <p className="text-white mb-1" style={{ fontFamily: 'Volkhov', fontSize: '20px' }}>Release date</p>
            <p className="text-orange-400" style={{ fontFamily: 'Volkhov', fontSize: '20px' }}>19 June, 2025</p>
          </div>
          <div>
            <p className="text-white mb-1" style={{ fontFamily: 'Volkhov', fontSize: '20px' }}>Genre</p>
            <p className="text-orange-400" style={{ fontFamily: 'Volkhov', fontSize: '20px' }}>Fantasy, Survival, Horror</p>
          </div>
        </div>
      </div>
    </footer>
  );
}