import React from 'react'

function Quiz({ question, questionNumber, totalQuestions, selectedAnswer, onAnswer, onNext, onSubmit }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Question {questionNumber} sur {totalQuestions}</h2>
      <h3 className="font-semibold text-gray-700 mb-4">{question.question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, i) => (
          <div key={i} className="flex items-center p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
            <input
              type="radio"
              name="question"
              id={`option-${i}`}
              className="mr-3"
              checked={selectedAnswer === i}
              onChange={() => onAnswer(i)}
            />
            <label htmlFor={`option-${i}`} className="text-gray-700">{option}</label>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        {questionNumber < totalQuestions ? (
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Suivant
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Soumettre
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz
