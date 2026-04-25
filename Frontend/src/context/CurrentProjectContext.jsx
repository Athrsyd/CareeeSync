/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from 'react'


const CurrentProjectContext = createContext();

const useCurrentProject = () => {
    return useContext(CurrentProjectContext);
};

const CurrentProjectProvider = ({ children }) => {
    const [currentProject, setCurrentProject] = useState(null);

    return (
        <CurrentProjectContext.Provider value={{ currentProject, setCurrentProject }}>
            {children}
        </CurrentProjectContext.Provider>
    );
};
const useCurrentProjectContext = () => {
    const context = useContext(CurrentProjectContext);  
    if (!context) {
        throw new Error('useCurrentProjectContext must be used within a CurrentProjectProvider');
    }
    return context;
}

export { useCurrentProject, useCurrentProjectContext};
export default CurrentProjectProvider;

