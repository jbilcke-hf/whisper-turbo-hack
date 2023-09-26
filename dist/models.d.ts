import { Result } from "true-myth";
import ModelDB from "./db/modelDB";
import { DBModel } from "./db/types";
export declare enum AvailableModels {
    WHISPER_TINY = "whisper-tiny",
    WHISPER_BASE = "whisper-base",
    WHISPER_SMALL = "whisper-small",
    WHISPER_MEDIUM = "whisper-medium",
    WHISPER_LARGE = "whisper-large"
}
export declare const ModelSizes: Map<AvailableModels, number>;
export declare class Model {
    name: string;
    data: Uint8Array;
    tokenizer: Uint8Array;
    constructor(name: string, data: Uint8Array, tokenizer: Uint8Array);
    static fromDBModel(dbModel: DBModel, db: ModelDB): Promise<Result<Model, Error>>;
}
export interface EncoderDecoder {
    name: string;
    encoder: Model;
    decoder: Model;
    config: Uint8Array;
    tokenizer: Uint8Array;
}
