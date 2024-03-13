import AdminChatBubble from '@/features/user/components/AdminChatBubble';
import UserChatBubble from '@/features/user/components/UserChatBubble';
import { appendMessage, getHistoryChat } from '@/redux/slice/chat-slice';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import socket from '@/config/socket';

function AdminChatBox() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.chat);
  const { userId } = useParams();

  const [textarea, setTextarea] = useState('');
  const messageEl = useRef(null);

  // Similar to componentDidMount
  useEffect(() => {
    console.log('connecting');
    socket.connect();
    if (authUser) {
      socket.emit('join_room', +userId);
      dispatch(getHistoryChat(+userId));
    }
    return () => socket.disconnect();
  }, [authUser, userId]);

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
          chatReceiverId: +userId,
          message: textarea,
        },
        userId: +userId,
      });
      setTextarea('');
    }
  };

  return (
    <div className='flex h-content w-full flex-col items-center justify-center bg-base-100 px-4'>
      <div className='h-content w-full overflow-auto' ref={messageEl}>
        {messages.map((message, index) =>
          authUser.id !== message.chatSenderId ? (
            <UserChatBubble type='admin' key={index} id={message.chatSenderId}>
              {message.message}
            </UserChatBubble>
          ) : (
            <AdminChatBubble type='admin' key={index}>
              {message.message}
            </AdminChatBubble>
          )
        )}
      </div>
      <form
        className='my-4 flex w-full items-center justify-between'
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
        <button className='flex h-10  items-center justify-center rounded-sm bg-primary px-2 text-center text-white'>
          Send
        </button>
      </form>
    </div>
  );
}

export default AdminChatBox;
