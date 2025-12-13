import { useState } from 'react';
export default function AIChatBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Hello! How can I help?' }]);
  const send = () => {
    if (!message.trim()) return;
    setMessages([...messages, { role: 'user', text: message }, { role: 'ai', text: 'Thanks for asking!' }]);
    setMessage('');
  };
  return (
    <div className="w-full h-96 border border-neon-blue/30 rounded-lg flex flex-col bg-gradient-to-b from-neon-darkblue/20 to-transparent">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (<div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-xs px-4 py-2 rounded-lg ${m.role === 'user' ? 'bg-neon-cyan text-black' : 'bg-neon-blue/30 text-neon-cyan'}`}>{m.text}</div>
        </div>))}
      </div>
      <div className="border-t border-neon-blue/20 p-4 flex gap-2">
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 bg-black border border-neon-blue/30 text-neon-cyan px-4 py-2 rounded-lg" placeholder="Ask AI..." />
        <button onClick={send} className="px-4 py-2 bg-neon-cyan text-black font-bold rounded-lg">Send</button>
      </div>
    </div>
  );
}
