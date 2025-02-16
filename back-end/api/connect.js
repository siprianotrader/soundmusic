// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://siprianotrader:2VDPNAfC6S9HA3gz@cluster0.lbcmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("sound");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
