import { useEffect, useState } from "react";
import { getMessages, sendMessage, ChatMessage } from "../../api/chatApi";

const ChatBox = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const loadMessages = async () => {
    const data = await getMessages();
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 3000); // polling every 3s
    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage({
      sender: "USER",
      message: input,
    });

    setInput("");
    loadMessages();
  };

  return (
    <div className="max-w-xl mx-auto mt-8 border rounded p-4">
      <h2 className="text-xl font-bold mb-3">Live Chat</h2>

      <div className="h-64 overflow-y-auto border p-2 mb-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 ${
              msg.sender === "AI" ? "text-blue-600" : "text-black"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
