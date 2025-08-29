
// Shims for allnet native functions
declare namespace allnet {
    // Messaging
    //% block="send message %text"
    function sendMessage(text: string): void;

    //% block="on message received"
    function onMessageReceived(handler: (text: string, sender: number) => void): void;

    // File transfer
    //% block="send file %data"
    function sendFile(data: Buffer): void;

    //% block="on file received"
    function onFileReceived(handler: (data: Buffer, sender: number) => void): void;

    // Mesh
    //% block="get peers"
    function getPeers(): number[];

    //% block="ping %peer"
    function ping(peer: number): number;

    //% block="set priority %level"
    function setPriority(level: string): void;

    //% block="on peer joined"
    function onPeerJoined(handler: (id: number) => void): void;

    //% block="on peer left"
    function onPeerLeft(handler: (id: number) => void): void;

    // Radio controls
    //% block="set channel %ch"
    function setChannel(ch: number): void;

    //% block="set power %level"
    function setPower(level: number): void;

    //% block="enable long range mode %on"
    function enableLongRange(on: boolean): void;
}
