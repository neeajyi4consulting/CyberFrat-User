import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import checkIcon from '../../assets/img/check-mark.svg'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  checkResult,
  checkScore,
  getQuiz,
} from "../../redux/actions/courseAction";

export default function ChapterQuiz() {
  const { id } = useParams();
  const { course, user } = useSelector((state)=>state);
  const scores = course?.score
  const [score, setScore] = useState(0);
  const currentUser = user.currentUser
  const dispatch = useDispatch();
  const quizResult = course.quizResult?.data?.data
  const totalScore = course.quizResult?.data?.total_marks
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizData = course?.courseQuiz
  const loading = course?.loading
  const testOption = quizData[currentQuestion]?.options.split(",");
  const [showScore, setShowScore] = useState(false);
  const [finalSubmit, setFinalSubmit] = useState(true);

  const handleAnswerOptionClick = async (val) => {
    const courseId = +id;
    const questionId = quizData[currentQuestion].id;
    const answers = [questionId] + ":" + val;
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", courseId);
    data.append("answers", answers);
    dispatch(checkResult(data));
    dispatch(checkScore(scores + [questionId] + ":" + val + ","));
    setScore(score + quizResult?.score);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleSubmit = () => {
    const data = new FormData();
    const newArray = scores.replace(/,\s*$/, "");
    console.log("this is new Array", newArray);
    const answers = newArray.replace(/[\]']+/g, "");
    console.log("this is answers", answers);
    data.append("user_id", currentUser.user_id);
    data.append("course_id", id);
    data.append("answers", answers);
    dispatch(checkResult(data));
    setFinalSubmit(false);
    // console.log("this is quiz score", quizResult?.score, "this is total score", totalScore, "this is result for passing", quizResult?.score==totalScore);
    // const isQuizPassed = quizResult?.score==totalScore
    
    
  };


  useEffect(() => {
    window.history.forward();
    dispatch(getQuiz(id))
  }, []);

  if (loading) {
    return (
      <div className="absolute bottom-0 left-0 z-40 text-center bg-gray-900 opacity-90 h-screen w-screen">
        <div className="my-auto mx-auto h-24 w-24 mt-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-red-700 duration-300 animate-spin"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="h-24 w-64 mx-auto text-gray-50 mt-4 text-center">
          &nbsp;&nbsp;&nbsp;Please Wait... <br/>This may take a few seconds
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Course Quiz | CyberFrat</title>
        <meta name="description" content="This is Course Quiz" />
      </Helmet>
      {showScore ? (
        <div className="bg-gray-200 pt-5  z-50">
          <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
            <span className="font-bold text-2xl mx-8">Course Quiz</span>
            <span className="text-red-500 font-bold text-sm">
              DO NOT RELOAD OR GO BACK
            </span>
          </div>
          <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
            {finalSubmit ? (
              <button
                className="bg-red-600 p-3 rounded-lg text-white hover:bg-red-500"
                onClick={handleSubmit}
              >
                Submit your Quiz
              </button>
            ) : (
              <div>
                <div className="md:text-4xl text-2xl text-center my-12">
                  You scored{" "}
                  <span className="text-blue-500">
                    {" "}
                    {quizResult?.score}
                  </span>{" "}
                  out of{" "}
                  <span className="text-green-600">
                    {totalScore}
                  </span>
                </div>
                <div className="text-center mb-10 mt-40">
                  <Link
                  rel="noreferrer"
                    to={`/courses/chaptervideo/${id}`}
                    className="bg-red-600 p-3 rounded-lg mr-2 text-white hover:bg-red-500"
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-200 pt-5  z-50">
            <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
              <span className="font-bold text-2xl mx-8">Course Quiz</span>
              <span className="text-red-500 font-bold text-sm">
                DO NOT REFRESH THIS PAGE OR GO BACK
              </span>
            </div>
            <div className="mt-5 md:mx-16 rounded-md bg-white p-10 pb-20">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{quizData.length}
              </div>

              <div className="md:text-2xl text-md font-bold py-5">
                {quizData[currentQuestion]?.question}
              </div>
              <div className="answer-section">
                {!testOption ? (
                  null
                ) : (
                  testOption.map((val) => (
                    <div key={val}
                      onClick={() => {
                        handleAnswerOptionClick(val);
                      }}
                      className="mt-5 hover:bg-gray-200 duration-300 p-5 rounded-full curser-pointer"
                    >
                      <img
                        src={checkIcon}
                        alt="...."
                        className="inline-block"
                      />{" "}
                      &nbsp;{val}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

