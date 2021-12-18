#!/usr/bin/env node
import app from "../app.js";
import debug from 'debug';
import cluster from 'cluster';
import os from 'os';

const cpus = os.cpus();
const log = debug('stormtrooper_api:www');
const onWorkerError = (code, signal) => log(code, signal);

if (cluster.isMaster) {
    cpus.forEach(_ => {
        const worker = cluster.fork();
        worker.on('error', onWorkerError);
    });
    cluster.on('exit', (err) => {
        const newWorker = cluster.fork();
        newWorker.on('error', onWorkerError);
        log(`A new worker rises ${newWorker.process.id}`);
    });
} else {
    const server = app.listen(3000, () => { log('Server started.') });
    server.on('error', (err) => log(err));
}

