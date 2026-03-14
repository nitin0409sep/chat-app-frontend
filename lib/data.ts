export interface ChatContact {
  id: string;
  name: string;
  avatarColor: string;
  lastMessage: string;
  time: string;
  isGroup?: boolean;
  online?: boolean;
  unreadCount?: number;
  active?: boolean;
}

export interface Message {
  id: string;
  content: string;
  time: string;
  sender: "me" | "them";
}

export const currentUser = {
  name: "John Doe",
  status: "Online" as const,
};

export const contacts: ChatContact[] = [
  {
    id: "1",
    name: "Sarah Kim",
    avatarColor: "bg-avatar-purple",
    lastMessage: "Sounds great! Let me check the designs...",
    time: "2:34 PM",
    active: true,
  },
  {
    id: "2",
    name: "Mike Johnson",
    avatarColor: "bg-avatar-amber",
    lastMessage: "Hey, are you coming to the meeting?",
    time: "1:15 PM",
    online: true,
    unreadCount: 1,
  },
  {
    id: "3",
    name: "Design Team",
    avatarColor: "bg-avatar-cyan",
    lastMessage: "Alex: Updated the mockups!",
    time: "11:42 AM",
    isGroup: true,
  },
  {
    id: "4",
    name: "Emma Roberts",
    avatarColor: "bg-avatar-pink",
    lastMessage: "Thanks for the update!",
    time: "Yesterday",
  },
  {
    id: "5",
    name: "Tom Parker",
    avatarColor: "bg-avatar-green",
    lastMessage: "Let's sync up tomorrow",
    time: "Mon",
  },
  {
    id: "6",
    name: "Product Launch",
    avatarColor: "bg-avatar-violet",
    lastMessage: "Lisa: Final review at 3pm",
    time: "Mar 10",
    isGroup: true,
  },
];

export const activeChat = {
  contact: contacts[0],
  messages: [
    {
      id: "1",
      content: "Hey! Have you had a chance to look at the new designs I sent over?",
      time: "2:30 PM",
      sender: "them" as const,
    },
    {
      id: "2",
      content: "Yes! They look amazing. I especially love the new color palette.",
      time: "2:31 PM",
      sender: "me" as const,
    },
    {
      id: "3",
      content: "The gradient on the hero section is really nice. Can we also try a darker variant?",
      time: "2:32 PM",
      sender: "them" as const,
    },
    {
      id: "4",
      content: "Sure thing! I'll work on a dark mode version tonight and share it with you tomorrow morning.",
      time: "2:33 PM",
      sender: "me" as const,
    },
  ],
};
