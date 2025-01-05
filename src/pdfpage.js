// import React from 'react';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// const PDFPage = () => {
//   const handleDownloadPDF = async () => {
//     const element = document.getElementById('page-content'); // The element to convert to PDF

//     try {
//       // Convert the element to an image
//       const canvas = await html2canvas(element);
//       const imgData = canvas.toDataURL('image/png');

//       // Create a new PDF instance
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4',
//       });

//       // Add the image to the PDF
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

//       // Convert PDF to a Blob URL
//       const pdfBlob = pdf.output('bloburl');
//       window.open(pdfBlob); // Open the PDF in a new tab
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav style={{ marginBottom: '20px' }}>
//         <a href="#home">Home</a> •
//         <a href="#about">About</a> •
//         <a href="#contact">Contact Us</a> •
//         <a href="#login">Login</a> •
//         <a href="#orders">Orders</a> •
//         <a href="#barcode">Barcode</a>
//       </nav>

//       {/* Page Content */}
//       <div id="page-content">
//         <h1 style={{ color: 'blue' }}>This Is Home Component</h1>
//         <p style={{ fontWeight: 'bold' }}>This is a nested Component</p>
//         <button>Inventory</button>
//         <button>Sales</button>
//       </div>

//       {/* Button to Generate PDF */}
//       <button onClick={handleDownloadPDF} style={{ marginTop: '20px' }}>
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default PDFPage;
import React from 'react';
import { jsPDF } from 'jspdf';

const HomePage = () => {
  
  return (
    <div>
      
    </div>
  );
};

export default HomePage;
