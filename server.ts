import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

// node clustering
import cluster from 'cluster';
import os from 'os'
const total_cpus = os.cpus().length;

// connect db
import { connect_to_db } from './src/config/index.config';

// routes
import app_routes from './src/app/app.routes';
import swagger_ui from 'swagger-ui-express';
import openapi_docs from './output.openapi.json';

const { LOCAL_PORT } = process.env;
const PORT = LOCAL_PORT;


if (cluster.isPrimary) {
    console.log(`Number of CPUs is ${total_cpus}`);
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < total_cpus; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
}
else {
    (async () => {
        const app = express();
        console.log(`Worker ${process.pid} started`);

        app.use(cors({ origin: "*" }));
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        await connect_to_db();
        app.get('/', (req: Request, res: Response) => { res.send('Hello World!') })
        app.use("/App", app_routes)

        let openapi_options = { customSiteTitle: "Raft Labs Assignment API Documentation" };
        app.use('/docs', swagger_ui.serve, swagger_ui.setup(openapi_docs, openapi_options));

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })

    })();
}



