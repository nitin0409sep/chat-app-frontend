import { cn } from "@/lib/utils";
import { ChatHeader } from "./chat-header";
import { ChatBubble } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import { TypingIndicator } from "./typing-indicator";
import { DatePill } from "./date-pill";
import { activeChat } from "@/lib/data";

interface ChatWindowProps {
  compact?: boolean;
  mobile?: boolean;
  className?: string;
}

export function ChatWindow({
  compact = false,
  mobile = false,
  className,
}: ChatWindowProps) {
  const { contact, messages } = activeChat;
  const inputPlaceholder = mobile ? "Message..." : "Type a message...";

  return (
    <div className={cn("flex flex-col h-full bg-white min-w-full ", className)}>
      <ChatHeader
        name={contact.name}
        online
        avatarColor={contact.avatarColor}
        compact={compact}
        showBackButton={mobile}
      />

      {/* Messages Area */}
      <div
        className={cn(
          "flex-1 flex flex-col overflow-y-auto bg-surface-secondary",
          mobile ? "gap-3 p-3 px-3" : compact ? "gap-3.5 p-5" : "gap-4 p-6"
        )}
      >
        <DatePill date="Today" compact={mobile} />

        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg}
            showAvatar={msg.sender === "them"}
            avatarColor={contact.avatarColor}
            compact={mobile}
          />
        ))}

        <TypingIndicator
          name="Sarah"
          avatarColor={contact.avatarColor}
          compact={mobile}
        />
      </div>

      <ChatInput compact={mobile || compact} placeholder={inputPlaceholder} />
    </div>
  );
}
