
import React from 'react';
import { QuestionSectionData, QuestionType, Answers } from '../types';

interface QuestionSectionProps {
  section: QuestionSectionData;
  answers: Answers;
  onAnswerChange: (questionId: string, value: string) => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ section, answers, onAnswerChange }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">{section.title}</h3>
      {section.questions.map((q) => (
        <div key={q.id} className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor={q.id}>
            {q.text}
          </label>
          {q.type === QuestionType.OpenEnded && (
            <input
              id={q.id}
              type="text"
              value={answers[q.id] || ''}
              onChange={(e) => onAnswerChange(q.id, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          )}
          {q.type === QuestionType.MultipleChoice && q.options && (
            <div className="flex flex-col space-y-2 mt-2">
              {q.options.map(option => (
                <label key={option.value} className="flex items-center space-s-3">
                  <input
                    type="radio"
                    name={q.id}
                    value={option.value}
                    checked={answers[q.id] === option.value}
                    onChange={(e) => onAnswerChange(q.id, e.target.value)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          )}
          {q.type === QuestionType.Reflection && (
            <div className="relative">
              <textarea
                id={q.id}
                value={answers[q.id] || ''}
                onChange={(e) => onAnswerChange(q.id, e.target.value)}
                rows={10}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 leading-8 bg-repeat-y bg-[length:100%_2rem]"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)',
                }}
                placeholder="שתף/י במקרה שהצלחת..."
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionSection;
