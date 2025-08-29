// TypeScript stubs for MakeCode blocks
namespace allnet {
    export function sendMessage(text: string): void {
        console.log("sendMessage", text)
    }
    export function onMessageReceived(handler: (text: string, sender: number) => void): void {
        console.log("onMessageReceived registered")
    }
    export function sendFile(data: Buffer): void {
        console.log("sendFile", data.length)
    }
    export function onFileReceived(handler: (data: Buffer, sender: number) => void): void {
        console.log("onFileReceived registered")
    }
    export function getPeers(): number[] {
        return [1,2,3]
    }
    export function ping(peer: number): number {
        return Math.random() * 100
    }
    export function setPriority(level: string): void {
        console.log("setPriority", level)
    }
    export function onPeerJoined(handler: (id: number) => void): void {
        console.log("onPeerJoined registered")
    }
    export function onPeerLeft(handler: (id: number) => void): void {
        console.log("onPeerLeft registered")
    }
    export function setChannel(ch: number): void {
        console.log("setChannel", ch)
    }
    export function setPower(level: number): void {
        console.log("setPower", level)
    }
    export function enableLongRange(on: boolean): void {
        console.log("enableLongRange", on)
    }
}
