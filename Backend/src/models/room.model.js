import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    createdby:{
        type: mongoose.Schema.User.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true });

const Room = mongoose.model('Room', RoomSchema);

export default Room;