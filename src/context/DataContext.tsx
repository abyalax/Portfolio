import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

const DataContext = createContext<{
    data: unknown;
    setData: Dispatch<SetStateAction<unknown>>;
}>({ data: null, setData: () => {} });

function DataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<unknown>();
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataProvider, DataContext };