/**
 * A class that handles recording audio from the microphone.
 * @remarks
 * This class is a wrapper around the MediaRecorder API.
 * @example
 * ```typescript
 * const recorder = await MicRecorder.create();
 * recorder.start();
 * recorder.stop();
 * const blob = await recorder.getBlob();
 * ```
 */
export declare class MicRecorder {
    private recorder;
    private static readonly supportedMimes;
    private audioChunks;
    private constructor();
    static start(): Promise<MicRecorder>;
    isRecording(): boolean;
    stop(): Promise<void>;
    getBlob(): Blob;
}
export default MicRecorder;
