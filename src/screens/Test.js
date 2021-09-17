import React, { useState } from 'react'

const Test = ({ setScreen }) => {
    const [current, setCurrent] = useState(0)
    const questions = [
        {
            question: 'Bu nima?',
            answers:
                [
                    {
                        val: 'Anor',
                        correct: true
                    },
                    {
                        val: 'Qovun',
                        correct: false
                    },
                    {
                        val: 'Anjir',
                        correct: false
                    },
                    {
                        val: 'Turshak',
                        correct: false
                    }
                ]
        },
        {
            question: 'Bu nima?',
            answers:
                [
                    {
                        val: 'Turshak',
                        correct: false
                    },
                    {
                        val: 'Qovun',
                        correct: false
                    },
                    {
                        val: 'Karom',
                        correct: true
                    },
                    {
                        val: 'Pista',
                        correct: false
                    }
                ]
        },
        {
            question: 'Bu nima?',
            answers:
                [
                    {
                        val: 'Qulupnay',
                        correct: false
                    },
                    {
                        val: 'Uzum',
                        correct: false
                    },
                    {
                        val: 'Qurt',
                        correct: false
                    },
                    {
                        val: 'Olma',
                        correct: true
                    }
                ]
        },
        {
            question: 'Bu nima?',
            answers:
                [
                    {
                        val: 'Nok',
                        correct: true
                    },
                    {
                        val: 'Qovun',
                        correct: false
                    },
                    {
                        val: 'Shaftoli',
                        correct: false
                    },
                    {
                        val: 'Uzum',
                        correct: false
                    }
                ]
        },
        {
            question: 'Bu nima?',
            answers:
                [
                    {
                        val: 'O\'rik',
                        correct: true
                    },
                    {
                        val: 'Gilos',
                        correct: false
                    },
                    {
                        val: 'Qovun',
                        correct: false
                    },
                    {
                        val: 'Olcha',
                        correct: false
                    }
                ]
        }
    ]
    const [menuActive, setMenuActive] = useState(false);
    const [answers, setAnswers] = useState([
        {
            selected: -1
        }, {
            selected: -1
        },
        {
            selected: -1
        },
        {
            selected: -1
        },
        {
            selected: -1
        }
    ])
    const showResult = () => {
        let correct = 0
        answers.forEach((element, e_key) => {
            if (typeof questions[e_key].answers[element.selected] !== "undefined" && questions[e_key].answers[element.selected].correct)
                ++correct
        });
        const conf = window.confirm(`Siz ${questions.length} ta savoldan ${correct} ta savolga to'g'ri javob berdingiz. Agar qaytadan yechmoqchi bo'lsangiz "OK" tugmasini bosing`);
        if (conf) {
            setAnswers([
                {
                    selected: -1
                }, {
                    selected: -1
                },
                {
                    selected: -1
                },
                {
                    selected: -1
                },
                {
                    selected: -1
                }
            ])
            setCurrent(0)
        } else {
            setScreen(0)
        }
    }
    const selectAnswer = (index) => {
        let old = [...answers]
        old[current].selected = index
        setAnswers([...old])
    }
    const change = (type) => {
        if (type == 'increment') {
            if (questions.length - 1 != current)
                setCurrent(current + 1)
            else
                showResult()

        } else {
            if (current != 0)
                setCurrent(current - 1)
        }
    }
    return < div className="app">
       <div className="container h-100 py-5" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="col-12 mt-5">
                {questions.length} ta savoldan {current + 1}-savol&nbsp;
                <button className="btn btn-sm btn-info rounded-0" onClick={e => { e.preventDefault(); change('decrement') }}>
                    &larr;
                </button>&nbsp;&nbsp;
                <button className="btn btn-sm btn-info rounded-0" onClick={e => { e.preventDefault(); change('increment') }}>
                    &rarr;
                </button>
            </div>
            <div className="col-12">
                <h1>{questions[current].question}</h1>
                <hr />

                <form>
                    {questions[current].answers.map((q, q_index) => (
                        <p key={`answer-${q_index}`}>
                            <label>
                                <input name="answer" onChange={(e) => { selectAnswer(q_index) }} type="radio" checked={answers[current].selected === q_index} value={q_index} />
                                <span>{q.val}</span>
                            </label>
                        </p>
                    ))}
                </form>

            </div>
            <div className="col-12">
                <button className="btn btn-sm btn-info rounded-0" onClick={e => { e.preventDefault(); change('decrement') }}>
                    Oldingi Savol
                </button>&nbsp;&nbsp;
                <button className="btn btn-sm btn-info rounded-0" onClick={e => { e.preventDefault(); change('increment') }}>
                    Keyingi savol
                </button>
                <button className="btn btn-sm btn-info rounded-0" onClick={e => { e.preventDefault(); showResult() }}>
                    Tugatish
                </button>
            </div>
        </div>
    </div>
}
export default Test