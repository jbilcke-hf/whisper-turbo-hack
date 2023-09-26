var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Result } from "true-myth";
export var AvailableModels;
(function (AvailableModels) {
    AvailableModels["WHISPER_TINY"] = "whisper-tiny";
    AvailableModels["WHISPER_BASE"] = "whisper-base";
    AvailableModels["WHISPER_SMALL"] = "whisper-small";
    AvailableModels["WHISPER_MEDIUM"] = "whisper-medium";
    AvailableModels["WHISPER_LARGE"] = "whisper-large";
})(AvailableModels || (AvailableModels = {}));
export const ModelSizes = new Map([
    [AvailableModels.WHISPER_TINY, 150 * 1024 * 1024],
    [AvailableModels.WHISPER_BASE, 280 * 1024 * 1024],
    [AvailableModels.WHISPER_SMALL, 650 * 1024 * 1024],
    [AvailableModels.WHISPER_MEDIUM, 1.75 * 1024 * 1024 * 1024],
    [AvailableModels.WHISPER_LARGE, 3.3 * 1024 * 1024 * 1024],
]);
export class Model {
    constructor(name, data, tokenizer) {
        this.name = name;
        this.data = data;
        this.tokenizer = tokenizer;
    }
    static fromDBModel(dbModel, db) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenizerResult = yield db.getTokenizer(dbModel.ID);
            if (tokenizerResult.isErr) {
                return Result.err(tokenizerResult.error);
            }
            const tokenizerBytes = tokenizerResult.value.bytes;
            return Result.ok(new Model(dbModel.name, dbModel.bytes, tokenizerBytes));
        });
    }
}
//# sourceMappingURL=models.js.map