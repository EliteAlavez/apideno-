
import { CHAR_DOUBLE_QUOTE } from "https://deno.land/std@0.152.0/path/_constants.ts";
import { MongoClient, ClientMariaDB } 
    from "../dependences.ts";


const mongoClient = new MongoClient();
const URI_MONGO="mongodb://itvoDeveloper:mongodb@localhost:27017/quotes?authMechanism=SCRAM-SHA-256&authSource=admin";
export const connectorMongoDB = await mongoClient.connect(URI_MONGO);



/**
 *  
    mongosh --username "itvoDeveloper" --password --host localhost --port 27017 --authenticationMechanism SCRAM-SHA-256
    password: mongodb

    mysql -u denoDev -p
    mariadb
 
    */

const CONN_MARIADB = {
    hostname: "localhost",
    port: 3360,
    username: "denoDev",
    password: "mariadb",
    db: "quotes",
    poolSize: 10};

export const connectorMariaDB = await new ClientMariaDB().connect(CONN_MARIADB);

