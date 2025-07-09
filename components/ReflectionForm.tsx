
import React, { useRef } from 'react';
import { Chapter, Answers } from '../types';
import QuestionSection from './QuestionSection';
import { exportToPdf } from '../services/pdfService';
import { PdfIcon, EmailIcon } from './icons';

interface ReflectionFormProps {
  chapter: Chapter;
  answers: Answers;
  onAnswerChange: (questionId: string, value: string) => void;
}

const ReflectionForm: React.FC<ReflectionFormProps> = ({ chapter, answers, onAnswerChange }) => {
  const formRef = useRef<HTMLDivElement>(null);
  
  const handlePdfExport = () => {
    const printElement = document.getElementById('print-version');
    exportToPdf(printElement, chapter, answers);
  };
  
  const handleEmailExport = () => {
    const subject = `רפלקציה: ${chapter.title}`;
    let body = `פרק: ${chapter.title}\n\n`;

    chapter.sections.forEach(section => {
      body += `--- ${section.title} ---\n`;
      section.questions.forEach(q => {
        body += `${q.text}\n`;
        body += `תשובה: ${answers[q.id] || 'לא נענה'}\n\n`;
      });
    });

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  const PrintVersion = () => (
    <div id="print-version" className="absolute -left-[9999px] top-auto w-[210mm] p-8 bg-white text-black">
      <div className="text-center mb-8">
          <div className="text-red-600 text-4xl font-bold tracking-wider mb-2">
             <span className="text-5xl">י</span>ותר <span className="text-5xl">מ</span>חוג
          </div>
          <h1 className="text-3xl font-bold mt-4">{chapter.title}</h1>
          <h2 className="text-2xl mt-1">יומן למידה למדריך</h2>
      </div>

      {chapter.sections.map(section => (
        <div key={section.title} className="mb-6">
          <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">{section.title}</h3>
          {section.questions.map(q => (
            <div key={q.id} className="mb-4">
              <p className="font-semibold">{q.text}</p>
              {q.type !== 'reflection' ? (
                <p className="p-2 border-b border-gray-300 min-h-[2rem]">{answers[q.id] || ''}</p>
              ) : (
                <div className="p-2 border border-gray-300 min-h-[10rem] mt-2 leading-8 bg-repeat-y bg-[length:100%_2rem]" style={{ backgroundImage: 'linear-gradient(to bottom, #ccc 1px, transparent 1px)'}}>
                    <div style={{ whiteSpace: 'pre-wrap'}}>{answers[q.id] || ''}</div>
                    <br/><br/><br/><br/>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-6">
      <PrintVersion />
      <div ref={formRef} className="bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{chapter.title}</h2>
        {chapter.sections.map((section, index) => (
          <QuestionSection 
            key={index}
            section={section}
            answers={answers}
            onAnswerChange={onAnswerChange}
          />
        ))}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePdfExport}
              className="flex items-center justify-center w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              ייצוא ל-PDF
              <PdfIcon />
            </button>
             <button
              onClick={handleEmailExport}
              className="flex items-center justify-center w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              שליחה במייל
              <EmailIcon />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReflectionForm;
