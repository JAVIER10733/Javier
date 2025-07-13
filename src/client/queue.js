const messageQueue = [];

export const addToQueue = (task) => {
  messageQueue.push(task);
};

export const processQueue = async () => {
  while (messageQueue.length > 0) {
    const task = messageQueue.shift();
    try {
      await task();
    } catch (err) {
      console.error('[QUEUE ERROR]', err);
    }
  }
};

setInterval(processQueue, 500); // procesar cada medio segundo