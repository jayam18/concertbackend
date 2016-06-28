import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  seatNo: Number,
  location: { type: String, default: '' },
  isAvaliable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Seat', seatSchema);
