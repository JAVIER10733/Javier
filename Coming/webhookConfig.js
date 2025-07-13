export default {
  enableWebhooks: false,
  endpoints: {
    logActivity: 'https://tubackend.com/api/logs',
    errorReport: 'https://tubackend.com/api/errors',
    userJoin: 'https://tubackend.com/api/user-joined'
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer tu_token_aqui'
  },
  events: {
    onJoin: true,
    onLeave: true,
    onCommand: true,
    onError: true
  }
};