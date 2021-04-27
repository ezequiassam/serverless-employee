import mongoose from 'mongoose';

export default mongoose.connect(process.env.DB_URL, {
  dbName: process.env.DB_NAME,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  bufferCommands: false, // Disable mongoose buffering
  bufferMaxEntries: 0, // and MongoDB driver buffering
});
