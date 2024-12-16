import React, { useState } from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = () => {
  const [barcodeValue, setBarcodeValue] = useState('ID10102024123606');

  return (
    <div>
      <h1>Barcode Generator</h1>
      {/* Input to change barcode value */}
      <input
        type="text"
        value={barcodeValue}
        onChange={(e) => setBarcodeValue(e.target.value)}
        placeholder="Enter value for barcode"
      />

      {/* Barcode component */}
      <Barcode value={barcodeValue} />
    </div>
  );
};

export default BarcodeGenerator;