import { initServer } from './server';

// comment

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

initServer();

