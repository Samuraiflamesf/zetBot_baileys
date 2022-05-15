import { proto } from "@adiwajshing/baileys";
import { text } from "stream/consumers";
import { IBotData } from "./IBotData";

export const getBotData = (
    socket: any,
    webMessage: proto.IWebMessageInfo
    ): IBotData => {
    const{remoteJid} = webMessage.key;
    const sendText = async (text: string) => {
        return await socket.sendMessage(remoteJid,{
            text: '${general.prefixEmoji} ${text}',

        });
    };

    const sendImage = async (
        pathOrBuffer: string | Buffer, 
        caption = "", 
        isReply = true
        ) => {
            let options = {};

            if (isReply){
                options = {
                    quoted: webMessage,
                }
            }
        }

    )

    return {
        remoteJid,
        sendText,
    }
};