import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

interface MenuQRCodeProps {
  url?: string;
}

const MenuQRCode = ({ url }: MenuQRCodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const menuUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <>
      {/* Floating QR Button */}
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 right-6 z-50 bg-card border border-primary/50 p-3 rounded-sm hover:scale-105 hover:border-primary transition-all duration-300 group"
        aria-label="Show QR Code"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <QRCodeSVG
            value={menuUrl}
            size={40}
            bgColor="transparent"
            fgColor="hsl(25, 75%, 55%)"
            level="L"
          />
        </div>
        <span className="absolute -top-10 right-0 bg-card border border-primary/50 text-primary text-xs px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-body uppercase tracking-wider">
          Scan Menu
        </span>
        
        {/* Corner accents */}
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-primary/50" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-primary/50" />
      </button>

      {/* Expanded QR Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-fade-in-up"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative bg-card border border-primary/30 p-10 rounded-sm max-w-sm w-full mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            
            <h3 className="font-display text-primary text-2xl uppercase tracking-[0.2em] mb-2">
              Scan Menu
            </h3>
            <p className="text-muted-foreground text-sm mb-8 font-body">
              Point your camera at the QR code
            </p>
            
            <div className="bg-foreground p-5 rounded-sm inline-block mb-8">
              <QRCodeSVG
                value={menuUrl}
                size={180}
                bgColor="hsl(35, 30%, 92%)"
                fgColor="hsl(30, 15%, 5%)"
                level="H"
                includeMargin={false}
              />
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-primary border border-primary px-8 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-body uppercase tracking-[0.2em] text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuQRCode;
