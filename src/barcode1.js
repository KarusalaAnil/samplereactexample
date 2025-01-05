import React, { useState } from 'react';
import Barcode from 'react-barcode';
import { toPng } from 'html-to-image';

const BarcodeGenerator1 = () => {
  const [barcodeValue, setBarcodeValue] = useState('EMB0002');
  const [barcodeWidth, setBarcodeWidth] = useState(2); // Width of the bars
  const [barcodeHeight, setBarcodeHeight] = useState(100); // Height of the barcode
  const [fontSize, setFontSize] = useState(20); // Font size for the text

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

      {/* Adjust Barcode Width */}
      <div>
        <label>Width: </label>
        <input
          type="number"
          value={barcodeWidth}
          onChange={(e) => setBarcodeWidth(Number(e.target.value))}
          min="1"
          max="10"
          step="0.1"
        />
      </div>

      {/* Adjust Barcode Height */}
      <div>
        <label>Height: </label>
        <input
          type="number"
          value={barcodeHeight}
          onChange={(e) => setBarcodeHeight(Number(e.target.value))}
          min="50"
          max="300"
          step="10"
        />
      </div>

      {/* Adjust Font Size */}
      <div>
        <label>Font Size: </label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          min="10"
          max="40"
          step="1"
        />
      </div>

      {/* Barcode component */}
      <div id="barcode" style={{ margin: '20px 0', backgroundColor: '#fff', padding: '10px', display: 'inline-block' }}>
        <Barcode
          value={barcodeValue}
          width={barcodeWidth} // Width of individual bars
          height={barcodeHeight} // Height of the barcode
          fontSize={fontSize} // Font size for the text
          margin={10} // Space around the barcode
          textMargin={5} // Space between barcode and text
        />
      </div>

      {/* Download Button */}
      <button onClick={handleDownload}>Download Barcode</button>
    </div>
  );
};

export default BarcodeGenerator1;
