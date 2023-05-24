import {
	Decoder,
	Encoder,
  } from './merkle-hellman/out/index.js';
  
  const decoder = new Decoder();
  const encoder = new Encoder(decoder.publicKey);
  
  const message = 'Voitsekhovich Ekaterina Alekseevna';
  
  const encodedMessage = encoder.encode(message);
  const decodedMessage = decoder.decode(encodedMessage);
  
  console.log(`Изначальное сообщение: ${message}`);
  console.log(`Зашифрованное сообщение: ${encodedMessage}`);
  console.log(`Расшифрованное сообщение: ${decodedMessage}`);