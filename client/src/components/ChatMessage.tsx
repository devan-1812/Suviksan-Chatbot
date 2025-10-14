import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          isBot
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        }`}
        data-testid={`message-${isBot ? "bot" : "user"}`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </motion.div>
  );
}
