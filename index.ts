import express, { Request, Response } from 'express';

const app = express();
const PORT: number = 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('helloworld');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});