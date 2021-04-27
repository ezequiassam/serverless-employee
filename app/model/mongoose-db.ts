import mongoose from 'mongoose';

export default mongoose.connect("mongodb://root:MongoDB2019!@localhost:27017", {
  dbName: "study",
  useNewUrlParser: true,
});
