import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatWindow } from "@/components/chat/chat-window";

export default function ChatPage() {
  return (
    <div className="flex h-dvh w-full overflow-hidden bg-white">
      {/* Sidebar: hidden on mobile, compact on tablet (md-xl), full on desktop (xl+) */}
      <div className="hidden md:block xl:hidden">
        <ChatSidebar compact />
      </div>
      <div className="hidden xl:block">
        <ChatSidebar />
      </div>

      {/* Chat Window: mobile (<md), compact (md-xl), full (xl+) */}
      <div className="flex-1 min-w-0 md:hidden">
        <ChatWindow mobile />
      </div>
      <div className="hidden md:flex md:flex-1 md:min-w-0 xl:hidden">
        <ChatWindow compact />
      </div>
      <div className="hidden xl:flex xl:flex-1 xl:min-w-0">
        <ChatWindow />
      </div>
    </div>
  );
}
