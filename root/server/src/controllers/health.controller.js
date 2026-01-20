export const healthCheck = (req, res) => {
  console.log('Health check hit');
  res.json({ status: 'ok' });
};
