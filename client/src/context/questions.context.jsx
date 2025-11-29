// DataContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

import { getQuestions, getTotalQuestionCount } from "../api/questions.api";
import { useAuth } from "../components/auth/AuthContext";

// Context
const QuestionsContext = createContext();

// Provider
export const QuestionsProvider = ({ children }) => {

    const { user } = useAuth();

    const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [totalQuestionCount, setTotalQuestionCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const questionsData = await getQuestions();
            setQuestions(questionsData);
            setIsLoadingQuestions(false);
        }
        if (user?.admin) fetchData();
    }, [user]);

    useEffect(() => {
        const fetchTotalCount = async () => {
            const count = await getTotalQuestionCount();
            setTotalQuestionCount(count);
            setIsLoadingQuestions(false);
        }
        if (user) fetchTotalCount();
    }, [user]);

    return (
        <QuestionsContext.Provider value={{ isLoadingQuestions, questions, setQuestions, totalQuestionCount }}>
            {children}
        </QuestionsContext.Provider>
    );
};

// Custom hook for convenience
export const useQuestions = () => useContext(QuestionsContext);