import React, { useState } from "react";

const Test = ({ setScreen }) => {
  const [current, setCurrent] = useState(0);
  const questions = [
    {
      question: "1. Prosessori qanaqa bo`lgan kompyuterlarga Photoshop dasturi o`rnatilishi mumkin.",
      answers: [
        {
          val: "Pentium",
          correct: false,
        },
        {
          val: "IBM",
          correct: false,
        },
        {
          val: "Macintosh",
          correct: false,
        },
        {
          val: "A va S",
          correct: true,
        },
      ],
    },
    {
      question: "2.Tezkor xotira qancha bo`lishi kerak",
      answers: [
        {
          val: "32 Mbaytdan kam bo`lmasligi kerak ",
          correct: false,
        },
        {
          val: "16 Mbaytdan kam bo`lmasligi kerak",
          correct: false,
        },
        {
          val: "64 Mbaytdan kam bo`lmasligi kerak",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    },
    {
      question: "3.Diskdagi bo`sh joy  qancha bo`lishi kerak?",
      answers: [
        {
          val: "125 Mbaytdan kam bo`lmasligi kerak ",
          correct: false,
        },
        {
          val: "56 Mbaytdan kam bo`lmasligi kerak",
          correct: false,
        },
        {
          val: "64 Mbaytdan kam bo`lmasligi kerak",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    },
    {
      question: "4.Videoadapter necha rangda bo`lishi kerak ",
      answers: [
        {
          val: "256",
          correct: false,
        },
        {
          val: "16",
          correct: false,
        },
        {
          val: "56",
          correct: false,
        },
        {
          val: "128",
          correct: true,
        },
      ],
    },
    {
      question: "5.Operasion sistema qanday bo`lishi kerak ?",
      answers: [
        {
          val: "Windows 95",
          correct: false,
        },
        {
          val: "Windows 98",
          correct: false,
        },
        {
          val: "Windows 3.1",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    },
    {
      question: "6.Macintosh kompyuterlarini sistemasiqanday bo`lishi kerak?",
      answers: [
        {
          val: "Software 3.0 ",
          correct: false,
        },
        {
          val: "Software 8.0",
          correct: false,
        },
        {
          val: "Software 7.0",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    },
    {
      question: "7.Kompyuterda Cd – Rom bo`lishi zarurmi?",
      answers: [
        {
          val: "Ha",
          correct: false,
        },
        {
          val: "Yo`q",
          correct: false,
        },
        {
          val: "Shart emas",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    },
    {
      question: "8.Tovush xaritasi zarurmi?",
      answers: [
        {
          val: "Ha",
          correct: false,
        },
        {
          val: "Yo`q",
          correct: false,
        },
        {
          val: "Zarur emas",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    },
    {
      question: "9.Photoshop da yaratilgan Fayllar kengaytmasi?",
      answers: [
        {
          val: "*.PDF",
          correct: false,
        },
        {
          val: "*.PSD",
          correct: false,
        },
        {
          val: "*.JPG",
          correct: false,
        },
        {
          val: "*.GIF",
          correct: true,
        },
      ],
    },
    {
      question: "10.Menyu bo`limlari qaysi bandda to`g`ri ko`rsatilgan ?",
      answers: [
        {
          val: "File Edit Image Layer Filter View Window Help",
          correct: false,
        },
        {
          val: "File Edit Image Filter View Window Help",
          correct: false,
        },
        {
          val: "File Edit Image Filter View Help",
          correct: false,
        },
        {
          val: "B va V",
          correct: true,
        },
      ],
    },
    {
      question: "11.Instrumentlar paneli oynaning qaerida joylashadi?",
      answers: [
        {
          val: "Menyu pastida",
          correct: false,
        },
        {
          val: "Oynaning o`ng qismida",
          correct: false,
        },
        {
          val: "Oynaning pastk qismida",
          correct: false,
        },
        {
          val: "Oynaning chap qismida",
          correct: true,
        },
      ],
    },
    {
      question: "12.Photoshop 6.0 versiyasida menyu bo`limlari qaysi bandda to`g`ri ko`rsatilgan?",
      answers: [
        {
          val: "Fayl,Pravka, Редактирование, Изображение, Слой,   Выделение, Фильтр, Вид, Окно, Помошь",
          correct: false,
        },
        {
          val: "Fayl,  Изображение, Слой, Выделение, Фильтр, Вид, Окно, Помошь",
          correct: false,
        },
        {
          val: "Fayl, Редактирование, Изображение, Слой,  Фильтр, Вид, Окно, Помошь",
          correct: false,
        },
        {
          val: "Fayl, Редактирование, Изображение, Слой, Выделение, Фильтр, Вид, Окно, Помошь",
          correct: true,
        },
      ],
    },
    {
      question: "13.	Photoshopni ishga tushirish",
      answers: [
        {
          val: "Пуск->Программы->Adobe->Photoshop",
          correct: false,
        },
        {
          val: "Yorliq orqali",
          correct: false,
        },
        {
          val: "A va B to`gri",
          correct: false,
        },
        {
          val: "To`g`ri javob yo`q",
          correct: true,
        },
      ],
    },
    {
      question: "14.Fayllarni import va eksport qilganda qanday kengaytma bilan uzatadi?",
      answers: [
        {
          val: "*.PDF",
          correct: false,
        },
        {
          val: "*.TIFF",
          correct: false,
        },
        {
          val: "To`g`ri javob yo`q",
          correct: false,
        },
        {
          val: "A va B",
          correct: true,
        },
      ],
    }
  ]
  const [menuActive, setMenuActive] = useState(false);
  const [answers, setAnswers] = useState([
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
    {
      selected: -1,
    },
  ]);
  const showResult = () => {
    let correct = 0;
    answers.forEach((element, e_key) => {
      if (
        typeof questions[e_key].answers[element.selected] !== "undefined" &&
        questions[e_key].answers[element.selected].correct
      )
        ++correct;
    });
    const conf = window.confirm(
      `Siz ${questions.length} ta savoldan ${correct} ta savolga to'g'ri javob berdingiz. Agar qaytadan yechmoqchi bo'lsangiz "OK" tugmasini bosing`
    );
    if (conf) {
      setAnswers([
        {
          selected: -1,
        },
        {
          selected: -1,
        },
        {
          selected: -1,
        },
        {
          selected: -1,
        },
        {
          selected: -1,
        },
      ]);
      setCurrent(0);
    } else {
      setScreen(0);
    }
  };
  const selectAnswer = index => {
    let old = [...answers];
    old[current].selected = index;
    setAnswers([...old]);
  };
  const change = type => {
    if (type == "increment") {
      if (questions.length - 1 != current) setCurrent(current + 1);
      else showResult();
    } else {
      if (current != 0) setCurrent(current - 1);
    }
  };
  return (
    <div className="app">
      <div
        className="container h-100 py-5"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="col-12 mt-5">
          {questions.length} ta savoldan {current + 1}-savol&nbsp;
          <button
            className="btn btn-sm btn-info rounded-0"
            onClick={e => {
              e.preventDefault();
              change("decrement");
            }}
          >
            &larr;
          </button>
          &nbsp;&nbsp;
          <button
            className="btn btn-sm btn-info rounded-0"
            onClick={e => {
              e.preventDefault();
              change("increment");
            }}
          >
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
                  <input
                    name="answer"
                    onChange={e => {
                      selectAnswer(q_index);
                    }}
                    type="radio"
                    checked={answers[current].selected === q_index}
                    value={q_index}
                  />
                  <span>{q.val}</span>
                </label>
              </p>
            ))}
          </form>
        </div>
        <div className="col-12">
          <button
            className="btn btn-sm btn-info rounded-0"
            onClick={e => {
              e.preventDefault();
              change("decrement");
            }}
          >
            Oldingi Savol
          </button>
          &nbsp;&nbsp;
          <button
            className="btn btn-sm btn-info rounded-0"
            onClick={e => {
              e.preventDefault();
              change("increment");
            }}
          >
            Keyingi savol
          </button>
          <button
            className="btn btn-sm btn-info rounded-0"
            onClick={e => {
              e.preventDefault();
              showResult();
            }}
          >
            Tugatish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Test;
