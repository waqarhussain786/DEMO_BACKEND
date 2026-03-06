import mongoose, { Schema, Document } from 'mongoose';

// 1. TypeScript Interface (What the code sees)
interface IProject extends Document {
    title: string;
    description: string;
    technologies: string[];
    link?: string; // Optional field
    createdAt: Date;
}

// 2. Mongoose Schema (What the database sees)
const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    link: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// 3. The Model
const Project = mongoose.model<IProject>('Project', ProjectSchema);
export default Project;