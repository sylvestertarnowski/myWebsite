import mongoose from 'mongoose';

import Words from './words';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Words };

export { connectDb };

export default models;