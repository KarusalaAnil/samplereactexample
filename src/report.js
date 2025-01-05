import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ReceiptGenerator = () => {
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Header
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Orchid Fertility Center', 105, 15, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
      '60-Feet Road, Near Vijaya Hospital, Sathyanaraya Puram, ONGOLE-523002',
      105,
      22,
      { align: 'center' }
    );
    doc.text('Ph/Mob: 9000463906 | Email ID: orchidivfcenter@gmail.com', 105, 27, { align: 'center' });
    doc.text('Website: https://orchidfertility.in/', 105, 32, { align: 'center' });

    // Add Divider
    doc.setLineWidth(0.5);
    doc.line(15, 35, 195, 35);

    // Billing Info
    doc.setFontSize(10);
    doc.text('CIN No.:', 15, 40);
    doc.text('GSTIN No.: 37CELPS4763P2ZD', 105, 40, { align: 'center' });
    doc.text('State Code: 28', 195, 40, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.text('Bill of Supply Cum Cash Receipt', 105, 50, { align: 'center' });

    // Patient Info
    const patientInfo = [
      ['Patient Name', ': Mr. Anil Kumar', 'Date & Time', ': 07-Dec-2024 04:16 pm'],
      ['MRNo', ': OFC/000010/W/2024-25', 'Invoice No.', ': OFC-01-01-O-0013'],
      ['Gender/Age', ': Male 33 Years', 'Type', ': Self'],
      ['Doctor Name', ': Dr. Sindhura Singh', 'Contact No.', ': +91 8985146502'],
      ['Address', ': hyd', '', ''],
    ];
    doc.setFontSize(10);
    let yPosition = 55;
    patientInfo.forEach(([label1, value1, label2, value2]) => {
      doc.setFont('helvetica', 'normal');
    //   doc.text(`${label1} ${value1}`, 15, yPosition);
      doc.text(`${label1}`, 15, yPosition);
      doc.text(`${value1}`, 45, yPosition);
      doc.text(`${label2}`, 105, yPosition);
      doc.text(`${value2}`, 140, yPosition);
      yPosition += 7;
    });

    // Table Data
    const tableData = [
      ['1', 'OP Fee', '1', '250.00', '0.00', '0.00', '250.00', '250.00'],
    ];

    doc.autoTable({
      startY: yPosition + 5,
      head: [['Sr. No.', 'Service Name', 'Qty', 'Unit Rate', 'Disc %', 'Disc Amt', 'Net Price', 'Total Amt']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 102, 204] },
    });

    // Totals and Footer
    const finalY = doc.previousAutoTable.finalY + 10;

    doc.text('Net Amount In Words: Rupees Two Hundred Fifty Only', 10, finalY);
    doc.text('Total Discount: 0.00', 190, finalY + 10, { align: 'right' });
    doc.text('Net Payable Amount: 250.0', 190, finalY + 15, { align: 'right' });
    doc.text('Paid Amount: 250.0', 190, finalY + 20, { align: 'right' });
    doc.text('Balance Amount: 0.00', 190, finalY + 25, { align: 'right' });

    // Transaction Summary
    doc.setFont('helvetica', 'bold');
    doc.text('Transaction Summary:', 10, finalY + 35);
    const transactionData = [
      ['OFC-01-01-O-0013', '250.0', '0013', 'Cash', '250.0'],
    ];

    doc.autoTable({
      startY: finalY + 40,
      head: [['Invoice No.', 'Net Price', 'Receipt No.', 'Payment Mode', 'Amount']],
      body: transactionData,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 102, 204] },
    });

    // Footer
    const footerY = doc.internal.pageSize.height - 15;
    doc.setFont('helvetica', 'normal');
    doc.text(`Issued By:`, 10, footerY - 5);
    doc.text(`Print Date & Time: ${new Date().toLocaleString()}`, 10, footerY);
    doc.text(`Cashier's Signature`, 190, footerY, { align: 'right' });

    // Open PDF in a new tab
    const pdfBlob = doc.output('bloburl');
    window.open(pdfBlob);
  };

  return (
    <div>
      <button onClick={generatePDF}>Download Receipt PDF</button>
    </div>
  );
};

export default ReceiptGenerator;
