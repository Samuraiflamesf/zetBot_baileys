import { connect } from "./conection";

export default async () => {
    const socket = await connect();

    socket.ev.on("messages.upsert", async (message) =>{
        
    });
};