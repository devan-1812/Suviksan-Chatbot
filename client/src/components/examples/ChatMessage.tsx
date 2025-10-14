import ChatMessage from "../ChatMessage";

export default function ChatMessageExample() {
  return (
    <div className="p-8 bg-background space-y-4">
      <ChatMessage message="Hello! How can I help you?" isBot={true} />
      <ChatMessage message="I need information about your services" isBot={false} />
    </div>
  );
}
