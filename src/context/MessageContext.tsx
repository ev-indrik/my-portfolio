import React, {createContext, useContext} from 'react';
import {message} from 'antd';

const MessageContext = createContext<ReturnType<typeof message.useMessage> | null>(null);

export const useMessageApi = () => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMessageApi must be used within a MessageProvider');
    }
    return context[0]; // messageApi
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const messageApiTuple = message.useMessage(); // [api, contextHolder]

    return (
        <MessageContext.Provider value={messageApiTuple}>
            {messageApiTuple[1]}
            {children}
        </MessageContext.Provider>
    );
};
