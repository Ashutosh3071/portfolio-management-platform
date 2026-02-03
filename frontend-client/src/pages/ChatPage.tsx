import ChatBox from "../components/chat/ChatBox";

const ChatPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Live Chat
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Chat with the AI assistant in real time
        </p>

        <div className="bg-white p-6 rounded shadow">
          <ChatBox />
        </div>

      </div>
    </div>
  );
};

export default ChatPage;
