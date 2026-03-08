import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function InvitationQR({ guestName }) {
  // We encode a unique string for the wedding entry
  const qrValue = `Wedding-Entry-${guestName}-${new Date().toLocaleDateString()}`;

  return (
    <div className="flex justify-center items-center p-2 bg-white">
      {guestName ? (
        <QRCodeSVG 
          value={qrValue}
          size={150}
          bgColor={"#ffffff"}
          fgColor={"#1a1a1b"}
          level={"L"}
          includeMargin={false}
        />
      ) : (
        <p className="text-gray-400 text-[10px]">Generating QR...</p>
      )}
    </div>
  );
}