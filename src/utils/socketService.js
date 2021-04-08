import io from 'socket.io-client';

// import logger from './logger';
const SOCKET_URL = 'https://api.talktier.com/CHATNSP';

class WSService {
  initializeSocket = userToken => {
    try {
      console.log('initializing socket');

      if (!userToken) {
        console.log('Skipping socket initialization.', 'userToken not found');
        return;
      }

      this.socket = io(SOCKET_URL, {
        transports: ['websocket'],
        query: {
          accessToken: userToken,
        },
      });

      this.socket.on('connect', data => {
        console.log('===== socket connected =====');
        console.log(data);
      });

      this.socket.on('disconnect', () => {
        console.log('socket disconnected');
      });

      this.socket.on('socketError', err => {
        console.log('socket connection error: ', err);
        // logger.data('socket connection error: ', err);
      });
      this.socket.on('parameterError', () => {
        console.log('socket connection error: ', err);
      });

      this.socket.on('error', error => {
        // console.log('socket error: ', err);
        // logger.data('socket error: ', err);
        console.log(error, 'thea data');
      });

      // this.socket.on('reconnect_attempt', () => {
      //     console.log('reconnecting');
      //     socket.io.opts.transports = ['polling', 'websocket'];
      // });

      // this.socket.on('connection-Response', (data) => {
      //     console.log('data received from server is: ', data);
      // });
    } catch (error) {
      // logger.error('initialize token error: ', error);
      console.log(error, 'hter tereo');
    }
  };

  emit(event, data = {}) {
    // logger.log('event to be emitted is: ', event);
    // logger.data('data to be emitted is: ', data);
    this.socket.emit(event, data);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }

  sendChatMessage(
    event,
    chatId,
    text,
    userId,
    receiverId,
    type,
    mediaName,
    tempId,
  ) {
    console.log(
      'emitting message: ',
      event,
      chatId,
      text,
      userId,
      receiverId,
      type,
      mediaName,
      tempId,
    );
    this.socket.emit(
      event,
      chatId,
      text,
      userId,
      receiverId,
      type,
      mediaName,
      tempId,
    );
  }

  isUserTyping(event, userID, chatID) {
    this.socket.emit(event, userID, chatID);
  }

  viewChat(event, userID, chatID) {
    console.log('view chat data is: ', event, userID, chatID);
    this.socket.emit(event, userID, chatID);
  }

  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const socketServices = new WSService();

export default socketServices;