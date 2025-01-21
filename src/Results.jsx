import React from 'react'

function Results({ questions, userAnswers, onRestart }) {
  const score = userAnswers.reduce((total, answer, index) => {
    return answer === questions[index].correctAnswer ? total + 1 : total
  }, 0)

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Résultats</h2>
      <p className="text-gray-700 mb-6">Vous avez obtenu {score} bonnes réponses sur {questions.length}.</p>
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="font-semibold text-gray-700 mb-4">{question.question}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((option, i) => (
                <div key={i} className={`flex items-center p-4 rounded-lg ${
                  i === question.correctAnswer ? 'bg-green-100' :
                  i === userAnswers[index] ? 'bg-red-100' : 'bg-gray-50'
                }`}>
                  <input
                    type="radio"
                    name={`result-${index}`}
                    id={`result-${index}-option-${i}`}
                    className="mr-3"
                    checked={i === userAnswers[index]}
                    disabled
                  />
                  <label htmlFor={`result-${index}-option-${i}`} className="text-gray-700">{option}</label>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700"><strong>Explication :</strong> {question.explanation}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onRestart}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Recommencer
      </button>
    </div>
  )
}

export default Results
