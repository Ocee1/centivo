import app from './app';
import connectDB from './database/config';

const PORT = process.env.PORT || 3300;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
  });
});