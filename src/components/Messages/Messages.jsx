import React, { useContext } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import * as S from './style.js';

const Messages = ({ column }) => {
    const { information } = useContext(MessagesContext);

    return (
        <>
            {information.errorLine && column.title === information.errorLine[0] ? (
                information.errorLine[1] === 'bad' ? (
                    <S.ListMessages message="bad">
                        <span>{information.message}</span>
                    </S.ListMessages>
                ) : (
                    <S.ListMessages message="good">
                        <span>{information.message}</span>
                    </S.ListMessages>
                )
            ) : (
                ''
            )}
        </>
    );
};

export default Messages;
