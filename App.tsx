
import React, { useState, useCallback } from 'react';
import { CHAPTERS } from './constants/chapters';
import { Answers, Chapter } from './types';
import Header from './components/Header';
import ChapterSelector from './components/ChapterSelector';
import ReflectionForm from './components/ReflectionForm';

const App: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answers>({});

  const handleChapterSelect = useCallback((chapterId: number) => {
    setSelectedChapterId(chapterId);
    setAnswers({}); // Reset answers when a new chapter is selected
  }, []);

  const handleAnswerChange = useCallback((questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }, []);

  const selectedChapter = CHAPTERS.find(c => c.id === selectedChapterId);

  return (
    <div className="bg-gray-100 min-h-screen" style={{
      backgroundImage: `url('https://www.transparenttextures.com/patterns/az-subtle.png')`
    }}>
      <Header />
      <main className="container mx-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <ChapterSelector onChapterSelect={handleChapterSelect} selectedChapterId={selectedChapterId} />
          {selectedChapter ? (
            <ReflectionForm
              chapter={selectedChapter}
              answers={answers}
              onAnswerChange={handleAnswerChange}
            />
          ) : (
            <div className="text-center mt-10 p-8 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700">ברוך הבא ליומן הלמידה</h2>
              <p className="text-gray-500 mt-2">אנא בחר פרק מהרשימה למעלה כדי להתחיל את תהליך הרפלקציה שלך.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
