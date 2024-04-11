import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Define the Resource model
const resourceSchema = new mongoose.Schema({
    data: String
})
const Resource = mongoose.model('Resource', resourceSchema);

// Connect to the database
mongoose.connect(process.env.MONGO_DB_URI || 'mongodb://localhost/test');
console.log('Connected to mongodb');

// Create a resource
app.post('/resources', async (req: Request, res: Response) => {
    const resource = new Resource({ data: req.body.data });
    await resource.save();
    res.status(201).send(resource);
});

// List resources
app.get('/resources', async (req: Request, res: Response) => {
    const resources = await Resource.find();
    res.json(resources);
});

// Get details of a resource
app.get('/resources/:id', async (req: Request, res: Response) => {
    const resource = await Resource.findById(req.params.id);
    if (resource) 
        res.json(resource);
    else 
        res.status(404).send('Resource not found');
});

// Update resource details
app.put('/resources/:id', async (req: Request, res: Response) => {
    const resource = await Resource.findByIdAndUpdate(req.params.id, { data: req.body.data }, { new: true });
    if (resource) 
        res.json(resource);
    else 
        res.status(404).send('Resource not found');
});

// Delete a resource
app.delete('/resources/:id', async (req: Request, res: Response) => {
    await Resource.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});