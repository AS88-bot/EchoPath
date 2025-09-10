import React, { useState } from 'react';
import { routeIntent } from './IntentRouter';
import { responses } from '../screens/logic/Responses';
import { detectTone } from '../screens/logic/ToneAnalyzer';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [emotionalState, setEmotionalState] = useState('neutral');

  const handleSend = () => {
    const tone = detectTone(input);
    setEmotionalState(tone);

    const intent = routeIntent(input, tone);
    const reply = responses[intent] || "I'm here for you. Tell me more.";

    setMessages([
      ...messages,
      { sender: 'You', text: input },
      { sender: 'EchoPath', text: reply }
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <h1 className="text-2xl font-bold text-indigo-600 mb-1">Welcome to EchoPath</h1>
      <p className="text-sm text-gray-600 mb-4">Your emotionally intelligent companion</p>

      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => {
          const bubbleClass =
            msg.sender === 'You'
              ? 'bg-gray-200 self-end'
              : emotionalState === 'overwhelmed'
              ? 'bg-orange-100'
              : emotionalState === 'confused'
              ? 'bg-green-100'
              : emotionalState === 'positive'
              ? 'bg-teal-100'
              : 'bg-indigo-100';

          return (
            <div key={index} className={`p-3 rounded-lg mb-2 max-w-[80%] ${bubbleClass}`}>
              <p className="font-semibold text-gray-800">{msg.sender}</p>
              <p className="text-gray-700">{msg.text}</p>
            </div>
          );
        })}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type how you're feeling..."
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleSend}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Send
      </button>
    </div>
  );
}
