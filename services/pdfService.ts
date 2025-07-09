
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Chapter, Answers } from '../types';

export const exportToPdf = async (
  printElement: HTMLElement | null,
  chapter: Chapter,
  answers: Answers
) => {
  if (!printElement) {
    console.error("Element to print not found!");
    return;
  }
  
  // @ts-ignore
  const { jsPDF } = window.jspdf;

  const canvas = await html2canvas(printElement, {
    scale: 2,
    useCORS: true,
  });
  
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const ratio = canvasWidth / pdfWidth;
  const canvasHeightInPdf = canvasHeight / ratio;

  let position = 0;
  
  if (canvasHeightInPdf < pdfHeight) {
    pdf.addImage(canvas, 'PNG', 0, 0, pdfWidth, canvasHeightInPdf);
  } else {
    let heightLeft = canvasHeightInPdf;
    while(heightLeft > 0) {
      pdf.addImage(canvas, 'PNG', 0, position, pdfWidth, canvasHeightInPdf);
      heightLeft -= pdfHeight;
      position -= pdfHeight;
      if (heightLeft > 0) {
        pdf.addPage();
      }
    }
  }

  const fileName = `רפלקציה-${chapter.title.split(':')[1].trim()}.pdf`;
  pdf.save(fileName);
};
