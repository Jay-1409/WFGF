export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('📥 Webhook received!');
    console.log('Payload:', req.body);
    return res.status(200).send('✅ Webhook received!');
  } else {
    res.status(405).send('❌ Method Not Allowed');
  }
}
