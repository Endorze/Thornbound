export default function ThornboundFooter() {
  return (
    <footer className="bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/thornbound.png" 
            alt="Thornbound" 
            className="h-20 w-auto"
          />
        </div>

        {/* Center - Main content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white mb-6" style={{ fontFamily: 'Almendera', fontSize: '32px' }}>
            Play the game now!
          </h2>
          <img 
            src="/download.png" 
            alt="Download" 
            className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>

        {/* Right side - Game info */}
        <div className="flex-shrink-0 text-right">
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