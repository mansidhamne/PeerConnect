import { Preference } from '../../models/preferences';
import { dbConnect } from '../../lib/utils';

dbConnect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const preferences = await Preference.find({});
        res.status(200).json({ success: true, data: preferences });
      } catch (error) {
        console.error('Error fetching preferences:', error);
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const preference = await Preference.create(req.body);
        res.status(201).json({ success: true, data: preference });
      } catch (error) {
        console.error('Error saving preference:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}