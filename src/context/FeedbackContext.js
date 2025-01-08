import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 10,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 10,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([...feedback, newFeedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
