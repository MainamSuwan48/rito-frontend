import { appendMessage } from '@/redux/slice/chat-slice';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import socket from '../config/socket';

function DevChat() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.chat);

  // socket.on('joined', (welcome_gift) => {
  //   dispatch(justJoined(welcome_gift.success));
  // });

  // socket.on('typing', (data) => {
  //   dispatch(isTyping(data));
  // });
  // socket.on("received", (data) => {
  //   console.log(data);
  //   dispatch(appendMessage(data));
  // });
  // socket.on('no_typing', (data) => {
  //   dispatch(notTyping(data));
  // });
  const [textarea, setTextarea] = useState('');

  // const [error, setError] = useState(null);

  // Similar to componentDidMount
  useEffect(() => {
    console.log('connecting');
    socket.connect();
    if (authUser) {
      socket.emit('join_room', authUser.id);
    }
    return () => socket.disconnect();
  }, [authUser]);

  useEffect(() => {
    socket.on('received', (data) => {
      // get "received" event from backend
      dispatch(appendMessage(data));
    });
  }, []);

  // const handleTyping = () => {
  //   socket.emit('typing', {
  //     handle: handle,
  //   });
  //   console.log(messages);
  // };

  // const noMoreTyping = () => {
  //   socket.emit('no_typing', {
  //     handle: handle,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textarea === '') {
      alert('message should not be null');
      return;
    }
    console.log('sent', textarea);
    socket.emit('chat', {
      data: { chatSenderId: authUser.id, chatReceiverId: 1, message: textarea },
      userId: authUser.id,
    });
    setTextarea('');
    // noMoreTyping();
  };

  return (
    <div className='App'>
      <header className='App-header'></header>
      <div id='main'>
        <div id='message' className='container'>
          <h1>
            <em>
              <strong>Chat Messages</strong>
            </em>
          </h1>
          {messages.length === 0 ? (
            <h3>
              <em>No messages</em>
            </h3>
          ) : null}
          {messages.map((item, index) => {
            return (
              <div key={index} className='row'>
                <span>
                  <strong>{item.chatSenderId}:</strong>
                </span>
                &nbsp;<p>{item.message}</p>
              </div>
            );
          })}
        </div>
        <div id='form'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor='messageField'>Message</label>
              <input
                type='text'
                placeholder='Type a message...'
                id='messageField'
                value={textarea}
                onChange={(e) => {
                  setTextarea(e.target.value);
                }}
              />
              <input className='button-primary' type='submit' value='send' />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DevChat;
