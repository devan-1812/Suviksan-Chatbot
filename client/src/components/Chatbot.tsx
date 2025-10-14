import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "./ChatMessage";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickQuestions = [
  "What services does Suviksan offer?",
  "How can I contact Suviksan?",
  "Where is Suviksan located?",
  "What are Suviksan's core domains?",
];

const botResponses: Record<string, string> = {
  "What services does Suviksan offer?":
    "Suviksan Technologies offers three core services: Data Analytics for transforming data into insights, Cyber Security for protecting your digital assets, and Data Security for ensuring data confidentiality and compliance.",
  "How can I contact Suviksan?":
    "You can reach us through our Contact page, email us at info@suviksan.com, or call us at +1 (555) 123-4567. We're available Monday to Friday, 9 AM to 6 PM.",
  "Where is Suviksan located?":
    "Suviksan Technologies is headquartered in Silicon Valley, California, with additional offices in New York and London to serve our global clients.",
  "What are Suviksan's core domains?":
    "Our expertise spans three critical IT domains: Data Analytics (business intelligence and predictive modeling), Cyber Security (threat protection and compliance), and Data Security (encryption and access control).",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your Suviksan Assistant. How can I help you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isOnline] = useState(true);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = botResponses[inputValue] || "Thank you for your message. Our team will get back to you shortly with more information.";

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue("");
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleClearChat = () => {
    setMessages([
      { id: Date.now(), text: "Hello! I'm your Suviksan Assistant. How can I help you today?", isBot: true },
    ]);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-chatbot-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-card border rounded-2xl shadow-2xl flex flex-col"
            data-testid="chatbot-panel"
          >
            <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Suviksan Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-status-online" : "bg-status-offline"}`} />
                    <span data-testid="status-indicator">{isOnline ? "Active" : "Offline"}</span>
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-close-chat"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg.text} isBot={msg.isBot} />
              ))}
            </div>

            <div className="p-4 border-t space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs h-auto py-2 px-3 whitespace-normal text-left justify-start hover-elevate active-elevate-2"
                    data-testid={`button-quick-question-${index}`}
                  >
                    {question}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1"
                  data-testid="input-chat-message"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="bg-orange text-orange-foreground hover:bg-orange/90"
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearChat}
                className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 gap-2"
                data-testid="button-delete-chat"
              >
                <Trash2 className="h-4 w-4" />
                Delete Chat
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
