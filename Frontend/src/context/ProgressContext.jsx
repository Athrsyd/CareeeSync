import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(() => {
        const savedProgress = localStorage.getItem('progress');
        return savedProgress ? JSON.parse(savedProgress) : false;
    });
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : '';
    });

    useEffect(() => {
        localStorage.setItem('progress', JSON.stringify(progress));
    }, [progress]);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    return (
        <ProgressContext.Provider value={{ progress, setProgress, feedback, setFeedback }}>
            {children}
        </ProgressContext.Provider>
    )
}

const useProgress = () => {
    const context = useContext(ProgressContext)
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider')
    }
    return context
}

export { ProgressProvider, useProgress }


export default ProgressContext