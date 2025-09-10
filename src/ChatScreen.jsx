import React, { useState } from 'react';
import { routeIntent } from './IntentRouter';
import { routeEmotion } from './screens/logic/EmotionRouter';
import { responses } from './screens/logic/Responses';
import { detectTone } from './screens/logic/ToneAnalyzer';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [emotionalState, setEmotionalState] = useState('neutral');

  const handleSend = () => {
    const tone = detectTone(input);
    setEmotionalState(tone);

    const intent = routeIntent(input, tone);
    const emotionalReply = routeEmotion(input, tone);
    const reply = responses[intent] || emotionalReply;

    setMessages([
      ...messages,
      { sender: 'You', text: input },
      { sender: 'EchoPath', text: reply, tone }
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6 flex flex-col font-sans">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight">💬 EchoPath</h1>
        <p className="text-md text-gray-600 italic mt-1">Your emotionally intelligent companion</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, index) => {
          const bubbleClass =
            msg.sender === 'You'
              ? 'bg-white self-end text-right shadow-md'
              : msg.tone === 'overwhelmed'
              ? 'bg-orange-100 shadow-md'
              : msg.tone === 'confused'
              ? 'bg-green-100 shadow-md'
              : msg.tone === 'positive'
              ? 'bg-teal-100 shadow-md'
              : 'bg-indigo-100 shadow-md';

          return (
            <div
              key={index}
              className={`p-4 rounded-xl max-w-[80%] transition-all duration-300 ease-in-out ${bubbleClass}`}
            >
              <p className="text-sm font-semibold text-gray-800">{msg.sender}</p>
              <p className="text-base text-gray-700 mt-1">{msg.text}</p>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="flex flex-col items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type how you're feeling..."
          className="border border-gray-300 p-3 rounded-xl shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-2"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition duration-200"
        >
          Send
        </button>
        <button
          onClick={() => setMessages([])}
          className="mt-2 text-sm text-indigo-500 hover:underline"
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}
