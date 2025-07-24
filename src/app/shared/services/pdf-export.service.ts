import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {

  constructor() {}

  exportAssetsToPdf(assets: any[], title: string = 'Asset Export Report') {
    const doc = new jsPDF();
    
    // Set up the document
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    
    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin, 30);
    
    // Generated date
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    doc.text(`Generated on: ${currentDate}`, margin, 45);
    
    // Prepare table data
    const tableData = assets.map(asset => [
      asset.asset_id || asset.id || '',
      asset.name || '',
      asset.manufacturer || '',
      asset.model || '',
      asset.status || 'active',
      asset.location?.name || ''
    ]);
    
    // Create table
    autoTable(doc, {
      head: [['ID', 'Name', 'Manufacturer', 'Model', 'Status', 'Location']],
      body: tableData,
      startY: 60,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 9,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      columnStyles: {
        0: { cellWidth: 25 }, // ID
        1: { cellWidth: 40 }, // Name
        2: { cellWidth: 30 }, // Manufacturer
        3: { cellWidth: 30 }, // Model
        4: { cellWidth: 20 }, // Status
        5: { cellWidth: 35 }, // Location
      },
    });
    
    // Save the PDF
    const fileName = `asset-export-${currentDate.replace(/\//g, '-')}.pdf`;
    doc.save(fileName);
  }

  exportSingleAssetToPdf(asset: any) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    
    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Asset Details Report', margin, 30);
    
    // Generated date
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    doc.text(`Generated on: ${currentDate}`, margin, 45);
    
    // Asset name and ID
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(asset.name || 'Unnamed Asset', margin, 65);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Asset ID: ${asset.asset_id || asset.id}`, margin, 75);
    
    // Status badge
    if (asset.status) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 128, 0); // Green color for active status
      doc.text(`Status: ${asset.status.toUpperCase()}`, margin, 85);
      doc.setTextColor(0, 0, 0); // Reset to black
    }
    
    let yPosition = 100;
    
    // Basic Information Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Basic Information', margin, yPosition);
    yPosition += 15;
    
    const basicInfo = [
      ['Category', asset.category?.name || 'General'],
      ['Asset Type', asset.type || 'Standard Asset'],
      ['Location', asset.location?.name || 'Not specified'],
      ['Department', asset.department?.name || 'Not specified'],
      ['Supplier', asset.supplier || 'Not specified'],
      ['Description', asset.description || 'No description available']
    ];
    
    autoTable(doc, {
      body: basicInfo,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold' },
        1: { cellWidth: 120 },
      },
      theme: 'plain',
    });
    
    yPosition = (doc as any).lastAutoTable.finalY + 20;
    
    // Technical Specifications Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Technical Specifications', margin, yPosition);
    yPosition += 15;
    
    const techSpecs = [
      ['Manufacturer', asset.manufacturer || 'Not specified'],
      ['Model Number', asset.model || 'Not specified'],
      ['Serial Number', asset.serial_number || 'Not specified'],
      ['Brand', asset.brand || 'Not specified']
    ];
    
    autoTable(doc, {
      body: techSpecs,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold' },
        1: { cellWidth: 120 },
      },
      theme: 'plain',
    });
    
    yPosition = (doc as any).lastAutoTable.finalY + 20;
    
    // Financial Information Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Financial Information', margin, yPosition);
    yPosition += 15;
    
    const financialInfo = [
      ['Purchase Cost', asset.purchase_price ? `$${asset.purchase_price.toLocaleString()}` : '$0'],
      ['Current Value', asset.current_value ? `$${asset.current_value.toLocaleString()}` : '$0'],
      ['Purchase Date', asset.purchase_date || 'Not specified'],
      ['Depreciation Method', 'Straight Line'],
      ['Useful Life', asset.depreciation ? `${asset.depreciation} years` : '10 years']
    ];
    
    autoTable(doc, {
      body: financialInfo,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold' },
        1: { cellWidth: 120 },
      },
      theme: 'plain',
    });
    
    yPosition = (doc as any).lastAutoTable.finalY + 20;
    
    // Health & Performance Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Health & Performance', margin, yPosition);
    yPosition += 15;
    
    const healthInfo = [
      ['Health Score', `${asset.health_score || 85}%`],
      ['Performance Status', 'Excellent Health'],
      ['Last Assessment', 'Not specified'],
      ['Next Assessment', 'Not scheduled']
    ];
    
    autoTable(doc, {
      body: healthInfo,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold' },
        1: { cellWidth: 120 },
      },
      theme: 'plain',
    });
    
    // Save the PDF
    const fileName = `asset-${asset.asset_id || asset.id}-${currentDate.replace(/\//g, '-')}.pdf`;
    doc.save(fileName);
  }
}