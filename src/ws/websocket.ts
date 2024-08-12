import { OnWSConnection,OnWSMessage, WSController } from "@midwayjs/core";
import {Context} from "@midwayjs/ws";
import * as http from 'http';

@WSController()
export class WebSocket{
    @OnWSConnection()
    public async connect(socket: Context, request:http.IncomingMessage){
        return JSON.stringify({
            code: 0,
            message: '连接成功'
        })

    }
    @OnWSMessage('message')
    public async receive(msg:Buffer){
        return JSON.stringify({
            code: 0,
            message: '接收成功',
            data: msg.toString()
        })
    }
}