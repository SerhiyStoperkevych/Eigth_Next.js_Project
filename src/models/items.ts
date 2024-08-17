import mongoose, { Schema, Document } from "mongoose";

export interface IItem extends Document {
    title: string;
    description: string;
}

export const ItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

export default mongoose.model<IItem>('items', ItemSchema);