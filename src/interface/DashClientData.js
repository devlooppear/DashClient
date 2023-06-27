function DashClientData() {
  const AuthData = {
    _id: String,
    nome: String,
    email: String,
    senha: String,
  };

  const Ticket = {
    id: Number,
    status: String,
    unreadMessages: Number,
    lastMessage: String,
    isGroup: Boolean,
    statusChatEnd: String,
    userId: Number,
    contactId: Number,
    whatsappId: Number,
    queueId: Number,
    createdAt: String,
    updatedAt: String,
  };

  const Queue = {
    id: Number,
    name: String,
    color: String,
  };

  const ClientData = {
    _id: String,
    tickets: [Ticket],
    contact: Object,
    queue: [Queue],
  };

  return {
    AuthData,
    Ticket,
    Queue,
    ClientData,
  };
}

export default DashClientData;
