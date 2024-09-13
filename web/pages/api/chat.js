// pages/api/chat.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Aquí deberías agregar la lógica para interactuar con el chatbot
      // Por ejemplo, enviar la solicitud a una API externa
      res.status(200).json({ message: 'Chatbot response' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  