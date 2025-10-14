import Chatbot from "../Chatbot";

export default function ChatbotExample() {
  return (
    <div className="min-h-screen bg-background">
      <Chatbot />
      <div className="p-8">
        <p className="text-muted-foreground">Click the chat button in the bottom right corner</p>
      </div>
    </div>
  );
}
