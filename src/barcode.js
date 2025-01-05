import React, { useState } from 'react';
import Barcode from 'react-barcode';
import { toPng } from 'html-to-image';

const BarcodeGenerator = () => {
  const [barcodeValue, setBarcodeValue] = useState('EMB0002');

  const handleDownload = () => {
    const barcodeElement = document.getElementById('barcode');
    if (barcodeElement) {
      toPng(barcodeElement)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `${barcodeValue}.png`;
          link.click();
        })
        .catch((err) => {
          console.error('Error downloading barcode:', err);
        });
    }
  };

  return (
    <div>
      <h1>Barcode Generator</h1>

      {/* Input to change barcode value */}
      <div>
        <input
          type="text"
          value={barcodeValue}
          onChange={(e) => setBarcodeValue(e.target.value)}
          placeholder="Enter value for barcode"
        />
      </div>

      {/* Barcode component */}
      <div id="barcode" style={{ margin: '10px 0', backgroundColor: '#fff', padding: '5px', display: 'inline-block' }}>
        <Barcode
          value={barcodeValue}
          options={{
            fontSize: 14, // Adjust font size for better visibility
            textMargin: 2, // Add margin between the barcode and text
            margin: 10, // Space around the barcode
          }}
        />
      </div>

      {/* Download Button */}
      <button onClick={handleDownload}>Download Barcode</button>
    </div>
  );
};

export default BarcodeGenerator;
