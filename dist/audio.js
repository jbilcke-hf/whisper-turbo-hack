var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export class MicRecorder {
    constructor(recorder, audioChunks) {
        this.recorder = null;
        this.audioChunks = [];
        this.recorder = recorder;
        this.audioChunks = audioChunks;
    }
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const stream = yield navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: this.supportedMimes.find((mime) => MediaRecorder.isTypeSupported(mime)),
            });
            console.log("Selected mime: ", mediaRecorder.mimeType);
            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", (event) => {
                audioChunks.push(event.data);
            });
            const recorder = new MicRecorder(mediaRecorder, audioChunks);
            recorder.recorder.start();
            return recorder;
        });
    }
    isRecording() {
        var _a;
        return ((_a = this.recorder) === null || _a === void 0 ? void 0 : _a.state) === "recording";
    }
    stop() {
        return new Promise((resolve, rejected) => {
            var _a, _b, _c;
            (_a = this.recorder) === null || _a === void 0 ? void 0 : _a.addEventListener("error", (event) => {
                rejected(event);
            });
            (_b = this.recorder) === null || _b === void 0 ? void 0 : _b.addEventListener("stop", () => {
                resolve();
            });
            (_c = this.recorder) === null || _c === void 0 ? void 0 : _c.stop();
            this.recorder = null;
        });
    }
    getBlob() {
        return new Blob(this.audioChunks);
    }
}
MicRecorder.supportedMimes = [
    "audio/webm",
    "audio/ogg", //Firefox
];
export default MicRecorder;
//# sourceMappingURL=audio.js.map