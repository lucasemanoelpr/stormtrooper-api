import { createClient } from "redis";
import { promisify } from "util";

const client = createClient();

client.on('error', (error) => console.log(error));

if (client.connected) {
    console.log('Redis connected');
} else {
    console.log('Redis not connected');
}

export const getAsync = promisify(client.get).bind(client);
export const setAsync = promisify(client.set).bind(client);