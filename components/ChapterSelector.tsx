
import React from 'react';
import { CHAPTERS } from '../constants/chapters';

interface ChapterSelectorProps {
  onChapterSelect: (chapterId: number) => void;
  selectedChapterId: number | null;
}

const ChapterSelector: React.FC<ChapterSelectorProps> = ({ onChapterSelect, selectedChapterId }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChapterSelect(Number(e.target.value));
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
      <label htmlFor="chapter-select" className="block text-lg font-semibold text-gray-700 mb-2">
        בחר פרק לתיעוד
      </label>
      <select
        id="chapter-select"
        value={selectedChapterId ?? ''}
        onChange={handleSelect}
        className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="" disabled>-- בחר פרק --</option>
        {CHAPTERS.map(chapter => (
          <option key={chapter.id} value={chapter.id}>
            {chapter.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChapterSelector;
