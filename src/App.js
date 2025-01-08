import React from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([...feedback, newFeedback]);
  };

  return (
    <Router>
      <Header text="Feedback UI" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
