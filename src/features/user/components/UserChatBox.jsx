import { appendMessage } from '@/redux/slice/chat-slice';
import { getHistoryChat } from '../../../redux/slice/chat-slice';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import socket from '../../../config/socket';
import React from 'react';
import AdminChatBubble from './AdminChatBubble';
import UserChatBubble from './UserChatBubble';
import { useRef } from 'react';

function UserChatBox() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.chat);

  const [textarea, setTextarea] = useState('');
  const messageEl = useRef(null);

  // Similar to componentDidMount
  useEffect(() => {
    console.log('connecting');
    socket.connect();
    if (authUser) {
      socket.emit('join_room', authUser.id);
      dispatch(getHistoryChat(1));
    }
    return () => socket.disconnect();
  }, [authUser]);

  useEffect(() => {
    socket.on('received', (data) => {
      // get "received" event from backend
      dispatch(appendMessage(data));
    });
    return () => socket.off('received');
  }, []);

  useEffect(() => {
    messageEl.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textarea.trim()) {
      console.log('sent', textarea);
      socket.emit('chat', {
        data: {
          chatSenderId: authUser.id,
          chatReceiverId: 1,
          message: textarea,
        },
        userId: authUser.id,
      });
      setTextarea('');
    }
  };

  return (
    <div className='flex h-content flex-col justify-end'>
      <div className='flex h-content w-full flex-col justify-end overflow-y-scroll bg-base-200 p-4'>
        <div ref={messageEl}>
          {messages.map((message, index) =>
            authUser.id === message.chatSenderId ? (
              <UserChatBubble key={index}>{message.message}</UserChatBubble>
            ) : (
              <AdminChatBubble key={index}>{message.message}</AdminChatBubble>
            )
          )}
        </div>
      </div>
      <form
        className='my-4 flex items-center justify-center'
        onSubmit={handleSubmit}
      >
        <input
          placeholder='Type your message here...'
          type='text'
          className='h-10 w-full border border-base_dark'
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
        />
        <button className='flex h-10 items-center justify-center rounded-sm bg-primary px-2 text-center text-white'>
          Send
        </button>
      </form>
    </div>
  );
}

export default UserChatBox;
