"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    previewFeatures: [],
    clientVersion: '7.8.0',
    engineVersion: '3c6e192761c0362d496ed980de936e2f3cebcd3a',
    activeProvider: 'postgresql',
    inlineSchema: 'generator client {\n  provider     = "prisma-client"\n  output       = "../src/generated/prisma"\n  moduleFormat = "cjs"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id          Int           @id @default(autoincrement())\n  email       String        @unique\n  name        String\n  balance     Int           @default(0)\n  password    String\n  createdAt   DateTime      @default(now())\n  transaction Transaction[]\n  budgets     Budget?\n}\n\nmodel Transaction {\n  id        Int      @id @default(autoincrement())\n  user      User     @relation(fields: [userId], references: [id])\n  userId    Int\n  type      Type\n  amount    Int\n  category  Category\n  note      String?\n  createdAt DateTime @default(now())\n}\n\nmodel Budget {\n  id        Int      @id @default(autoincrement())\n  user      User     @relation(fields: [userId], references: [id])\n  userId    Int      @unique\n  limit     Int\n  period    Period\n  createdAt DateTime @default(now())\n}\n\nenum Period {\n  weekly\n  monthly\n}\n\nenum Type {\n  expense\n  income\n}\n\nenum Category {\n  food\n  transport\n  shopping\n  utilities\n  work\n  health\n  allowance\n  salary\n  gift\n  refund\n  others\n}\n',
    runtimeDataModel: {
        models: {},
        enums: {},
        types: {},
    },
    parameterizationSchema: {
        strings: [],
        graph: '',
    },
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"email","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"balance","kind":"scalar","type":"Int"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"transaction","kind":"object","type":"Transaction","relationName":"TransactionToUser"},{"name":"budgets","kind":"object","type":"Budget","relationName":"BudgetToUser"}],"dbName":null},"Transaction":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"user","kind":"object","type":"User","relationName":"TransactionToUser"},{"name":"userId","kind":"scalar","type":"Int"},{"name":"type","kind":"enum","type":"Type"},{"name":"amount","kind":"scalar","type":"Int"},{"name":"category","kind":"enum","type":"Category"},{"name":"note","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Budget":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"user","kind":"object","type":"User","relationName":"BudgetToUser"},{"name":"userId","kind":"scalar","type":"Int"},{"name":"limit","kind":"scalar","type":"Int"},{"name":"period","kind":"enum","type":"Period"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
    strings: JSON.parse('["where","orderBy","cursor","user","transaction","budgets","_count","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_avg","_sum","_min","_max","User.groupBy","User.aggregate","Transaction.findUnique","Transaction.findUniqueOrThrow","Transaction.findFirst","Transaction.findFirstOrThrow","Transaction.findMany","Transaction.createOne","Transaction.createMany","Transaction.createManyAndReturn","Transaction.updateOne","Transaction.updateMany","Transaction.updateManyAndReturn","Transaction.upsertOne","Transaction.deleteOne","Transaction.deleteMany","Transaction.groupBy","Transaction.aggregate","Budget.findUnique","Budget.findUniqueOrThrow","Budget.findFirst","Budget.findFirstOrThrow","Budget.findMany","Budget.createOne","Budget.createMany","Budget.createManyAndReturn","Budget.updateOne","Budget.updateMany","Budget.updateManyAndReturn","Budget.upsertOne","Budget.deleteOne","Budget.deleteMany","Budget.groupBy","Budget.aggregate","AND","OR","NOT","id","userId","limit","Period","period","createdAt","equals","in","notIn","lt","lte","gt","gte","not","Type","type","amount","Category","category","note","contains","startsWith","endsWith","email","name","balance","password","every","some","none","is","isNot","connectOrCreate","upsert","disconnect","delete","connect","createMany","set","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
    graph: 'swEgMAsEAABwACAFAABxACA_AABuADBAAAALABBBAABuADBCAgAAAAFHQABdACFZAQAAAAFaAQBvACFbAgBbACFcAQBvACEBAAAAAQAgCwMAAF4AID8AAHIAMEAAAAMAEEEAAHIAMEICAFsAIUMCAFsAIUdAAF0AIVEAAHNRIlICAFsAIVQAAHRUIlUBAHUAIQIDAACAAQAgVQAAgQEAIAsDAABeACA_AAByADBAAAADABBBAAByADBCAgAAAAFDAgBbACFHQABdACFRAABzUSJSAgBbACFUAAB0VCJVAQB1ACEDAAAAAwAgAQAABAAwAgAABQAgCQMAAF4AID8AAFoAMEAAAAcAEEEAAFoAMEICAFsAIUMCAFsAIUQCAFsAIUYAAFxGIkdAAF0AIQEAAAAHACABAAAAAwAgAQAAAAEAIAsEAABwACAFAABxACA_AABuADBAAAALABBBAABuADBCAgBbACFHQABdACFZAQBvACFaAQBvACFbAgBbACFcAQBvACECBAAApwEAIAUAAKgBACADAAAACwAgAQAADAAwAgAAAQAgAwAAAAsAIAEAAAwAMAIAAAEAIAMAAAALACABAAAMADACAAABACAIBAAApQEAIAUAAKYBACBCAgAAAAFHQAAAAAFZAQAAAAFaAQAAAAFbAgAAAAFcAQAAAAEBDAAAEAAgBkICAAAAAUdAAAAAAVkBAAAAAVoBAAAAAVsCAAAAAVwBAAAAAQEMAAASADABDAAAEgAwCAQAAJIBACAFAACTAQAgQgIAewAhR0AAfQAhWQEAkQEAIVoBAJEBACFbAgB7ACFcAQCRAQAhAgAAAAEAIAwAABUAIAZCAgB7ACFHQAB9ACFZAQCRAQAhWgEAkQEAIVsCAHsAIVwBAJEBACECAAAACwAgDAAAFwAgAgAAAAsAIAwAABcAIAMAAAABACATAAAQACAUAAAVACABAAAAAQAgAQAAAAsAIAUGAACMAQAgGQAAjQEAIBoAAJABACAbAACPAQAgHAAAjgEAIAk_AABqADBAAAAeABBBAABqADBCAgBQACFHQABSACFZAQBrACFaAQBrACFbAgBQACFcAQBrACEDAAAACwAgAQAAHQAwGAAAHgAgAwAAAAsAIAEAAAwAMAIAAAEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgCAMAAIsBACBCAgAAAAFDAgAAAAFHQAAAAAFRAAAAUQJSAgAAAAFUAAAAVAJVAQAAAAEBDAAAJgAgB0ICAAAAAUMCAAAAAUdAAAAAAVEAAABRAlICAAAAAVQAAABUAlUBAAAAAQEMAAAoADABDAAAKAAwCAMAAIoBACBCAgB7ACFDAgB7ACFHQAB9ACFRAACHAVEiUgIAewAhVAAAiAFUIlUBAIkBACECAAAABQAgDAAAKwAgB0ICAHsAIUMCAHsAIUdAAH0AIVEAAIcBUSJSAgB7ACFUAACIAVQiVQEAiQEAIQIAAAADACAMAAAtACACAAAAAwAgDAAALQAgAwAAAAUAIBMAACYAIBQAACsAIAEAAAAFACABAAAAAwAgBgYAAIIBACAZAACDAQAgGgAAhgEAIBsAAIUBACAcAACEAQAgVQAAgQEAIAo_AABfADBAAAA0ABBBAABfADBCAgBQACFDAgBQACFHQABSACFRAABgUSJSAgBQACFUAABhVCJVAQBiACEDAAAAAwAgAQAAMwAwGAAANAAgAwAAAAMAIAEAAAQAMAIAAAUAIAkDAABeACA_AABaADBAAAAHABBBAABaADBCAgAAAAFDAgAAAAFEAgBbACFGAABcRiJHQABdACEBAAAANwAgAQAAADcAIAEDAACAAQAgAwAAAAcAIAEAADoAMAIAADcAIAMAAAAHACABAAA6ADACAAA3ACADAAAABwAgAQAAOgAwAgAANwAgBgMAAH8AIEICAAAAAUMCAAAAAUQCAAAAAUYAAABGAkdAAAAAAQEMAAA-ACAFQgIAAAABQwIAAAABRAIAAAABRgAAAEYCR0AAAAABAQwAAEAAMAEMAABAADAGAwAAfgAgQgIAewAhQwIAewAhRAIAewAhRgAAfEYiR0AAfQAhAgAAADcAIAwAAEMAIAVCAgB7ACFDAgB7ACFEAgB7ACFGAAB8RiJHQAB9ACECAAAABwAgDAAARQAgAgAAAAcAIAwAAEUAIAMAAAA3ACATAAA-ACAUAABDACABAAAANwAgAQAAAAcAIAUGAAB2ACAZAAB3ACAaAAB6ACAbAAB5ACAcAAB4ACAIPwAATwAwQAAATAAQQQAATwAwQgIAUAAhQwIAUAAhRAIAUAAhRgAAUUYiR0AAUgAhAwAAAAcAIAEAAEsAMBgAAEwAIAMAAAAHACABAAA6ADACAAA3ACAIPwAATwAwQAAATAAQQQAATwAwQgIAUAAhQwIAUAAhRAIAUAAhRgAAUUYiR0AAUgAhDQYAAFQAIBkAAFkAIBoAAFQAIBsAAFQAIBwAAFQAIEgCAAAAAUkCAAAABEoCAAAABEsCAAAAAUwCAAAAAU0CAAAAAU4CAAAAAU8CAFgAIQcGAABUACAbAABXACAcAABXACBIAAAARgJJAAAARghKAAAARghPAABWRiILBgAAVAAgGwAAVQAgHAAAVQAgSEAAAAABSUAAAAAESkAAAAAES0AAAAABTEAAAAABTUAAAAABTkAAAAABT0AAUwAhCwYAAFQAIBsAAFUAIBwAAFUAIEhAAAAAAUlAAAAABEpAAAAABEtAAAAAAUxAAAAAAU1AAAAAAU5AAAAAAU9AAFMAIQhIAgAAAAFJAgAAAARKAgAAAARLAgAAAAFMAgAAAAFNAgAAAAFOAgAAAAFPAgBUACEISEAAAAABSUAAAAAESkAAAAAES0AAAAABTEAAAAABTUAAAAABTkAAAAABT0AAVQAhBwYAAFQAIBsAAFcAIBwAAFcAIEgAAABGAkkAAABGCEoAAABGCE8AAFZGIgRIAAAARgJJAAAARghKAAAARghPAABXRiINBgAAVAAgGQAAWQAgGgAAVAAgGwAAVAAgHAAAVAAgSAIAAAABSQIAAAAESgIAAAAESwIAAAABTAIAAAABTQIAAAABTgIAAAABTwIAWAAhCEgIAAAAAUkIAAAABEoIAAAABEsIAAAAAUwIAAAAAU0IAAAAAU4IAAAAAU8IAFkAIQkDAABeACA_AABaADBAAAAHABBBAABaADBCAgBbACFDAgBbACFEAgBbACFGAABcRiJHQABdACEISAIAAAABSQIAAAAESgIAAAAESwIAAAABTAIAAAABTQIAAAABTgIAAAABTwIAVAAhBEgAAABGAkkAAABGCEoAAABGCE8AAFdGIghIQAAAAAFJQAAAAARKQAAAAARLQAAAAAFMQAAAAAFNQAAAAAFOQAAAAAFPQABVACENBAAAcAAgBQAAcQAgPwAAbgAwQAAACwAQQQAAbgAwQgIAWwAhR0AAXQAhWQEAbwAhWgEAbwAhWwIAWwAhXAEAbwAhYAAACwAgYQAACwAgCj8AAF8AMEAAADQAEEEAAF8AMEICAFAAIUMCAFAAIUdAAFIAIVEAAGBRIlICAFAAIVQAAGFUIlUBAGIAIQcGAABUACAbAABpACAcAABpACBIAAAAUQJJAAAAUQhKAAAAUQhPAABoUSIHBgAAVAAgGwAAZwAgHAAAZwAgSAAAAFQCSQAAAFQISgAAAFQITwAAZlQiDgYAAGQAIBsAAGUAIBwAAGUAIEgBAAAAAUkBAAAABUoBAAAABUsBAAAAAUwBAAAAAU0BAAAAAU4BAAAAAU8BAGMAIVYBAAAAAVcBAAAAAVgBAAAAAQ4GAABkACAbAABlACAcAABlACBIAQAAAAFJAQAAAAVKAQAAAAVLAQAAAAFMAQAAAAFNAQAAAAFOAQAAAAFPAQBjACFWAQAAAAFXAQAAAAFYAQAAAAEISAIAAAABSQIAAAAFSgIAAAAFSwIAAAABTAIAAAABTQIAAAABTgIAAAABTwIAZAAhC0gBAAAAAUkBAAAABUoBAAAABUsBAAAAAUwBAAAAAU0BAAAAAU4BAAAAAU8BAGUAIVYBAAAAAVcBAAAAAVgBAAAAAQcGAABUACAbAABnACAcAABnACBIAAAAVAJJAAAAVAhKAAAAVAhPAABmVCIESAAAAFQCSQAAAFQISgAAAFQITwAAZ1QiBwYAAFQAIBsAAGkAIBwAAGkAIEgAAABRAkkAAABRCEoAAABRCE8AAGhRIgRIAAAAUQJJAAAAUQhKAAAAUQhPAABpUSIJPwAAagAwQAAAHgAQQQAAagAwQgIAUAAhR0AAUgAhWQEAawAhWgEAawAhWwIAUAAhXAEAawAhDgYAAFQAIBsAAG0AIBwAAG0AIEgBAAAAAUkBAAAABEoBAAAABEsBAAAAAUwBAAAAAU0BAAAAAU4BAAAAAU8BAGwAIVYBAAAAAVcBAAAAAVgBAAAAAQ4GAABUACAbAABtACAcAABtACBIAQAAAAFJAQAAAARKAQAAAARLAQAAAAFMAQAAAAFNAQAAAAFOAQAAAAFPAQBsACFWAQAAAAFXAQAAAAFYAQAAAAELSAEAAAABSQEAAAAESgEAAAAESwEAAAABTAEAAAABTQEAAAABTgEAAAABTwEAbQAhVgEAAAABVwEAAAABWAEAAAABCwQAAHAAIAUAAHEAID8AAG4AMEAAAAsAEEEAAG4AMEICAFsAIUdAAF0AIVkBAG8AIVoBAG8AIVsCAFsAIVwBAG8AIQtIAQAAAAFJAQAAAARKAQAAAARLAQAAAAFMAQAAAAFNAQAAAAFOAQAAAAFPAQBtACFWAQAAAAFXAQAAAAFYAQAAAAEDXQAAAwAgXgAAAwAgXwAAAwAgCwMAAF4AID8AAFoAMEAAAAcAEEEAAFoAMEICAFsAIUMCAFsAIUQCAFsAIUYAAFxGIkdAAF0AIWAAAAcAIGEAAAcAIAsDAABeACA_AAByADBAAAADABBBAAByADBCAgBbACFDAgBbACFHQABdACFRAABzUSJSAgBbACFUAAB0VCJVAQB1ACEESAAAAFECSQAAAFEISgAAAFEITwAAaVEiBEgAAABUAkkAAABUCEoAAABUCE8AAGdUIgtIAQAAAAFJAQAAAAVKAQAAAAVLAQAAAAFMAQAAAAFNAQAAAAFOAQAAAAFPAQBlACFWAQAAAAFXAQAAAAFYAQAAAAEAAAAAAAVoAgAAAAFrAgAAAAFsAgAAAAFtAgAAAAFuAgAAAAEBaAAAAEYCAWhAAAAAAQUTAACvAQAgFAAAsgEAIGIAALABACBjAACxAQAgZgAAAQAgAxMAAK8BACBiAACwAQAgZgAAAQAgAgQAAKcBACAFAACoAQAgAAAAAAAAAWgAAABRAgFoAAAAVAIBaAEAAAABBRMAAKoBACAUAACtAQAgYgAAqwEAIGMAAKwBACBmAAABACADEwAAqgEAIGIAAKsBACBmAAABACAAAAAAAAFoAQAAAAELEwAAmQEAMBQAAJ4BADBiAACaAQAwYwAAmwEAMGQAAJ0BADBlAACdAQAwZgAAnQEAMGcAAJwBACBoAACdAQAwaQAAnwEAMGoAAKABADAHEwAAlAEAIBQAAJcBACBiAACVAQAgYwAAlgEAIGQAAAcAIGUAAAcAIGYAADcAIARCAgAAAAFEAgAAAAFGAAAARgJHQAAAAAECAAAANwAgEwAAlAEAIAMAAAAHACATAACUAQAgFAAAmAEAIAYAAAAHACAMAACYAQAgQgIAewAhRAIAewAhRgAAfEYiR0AAfQAhBEICAHsAIUQCAHsAIUYAAHxGIkdAAH0AIQZCAgAAAAFHQAAAAAFRAAAAUQJSAgAAAAFUAAAAVAJVAQAAAAECAAAABQAgEwAApAEAIAMAAAAFACATAACkAQAgFAAAowEAIAEMAACpAQAwCwMAAF4AID8AAHIAMEAAAAMAEEEAAHIAMEICAAAAAUMCAFsAIUdAAF0AIVEAAHNRIlICAFsAIVQAAHRUIlUBAHUAIQIAAAAFACAMAACjAQAgAgAAAKEBACAMAACiAQAgCj8AAKABADBAAAChAQAQQQAAoAEAMEICAFsAIUMCAFsAIUdAAF0AIVEAAHNRIlICAFsAIVQAAHRUIlUBAHUAIQo_AACgAQAwQAAAoQEAEEEAAKABADBCAgBbACFDAgBbACFHQABdACFRAABzUSJSAgBbACFUAAB0VCJVAQB1ACEGQgIAewAhR0AAfQAhUQAAhwFRIlICAHsAIVQAAIgBVCJVAQCJAQAhBkICAHsAIUdAAH0AIVEAAIcBUSJSAgB7ACFUAACIAVQiVQEAiQEAIQZCAgAAAAFHQAAAAAFRAAAAUQJSAgAAAAFUAAAAVAJVAQAAAAEEEwAAmQEAMGIAAJoBADBmAACdAQAwZwAAnAEAIAMTAACUAQAgYgAAlQEAIGYAADcAIAABAwAAgAEAIAZCAgAAAAFHQAAAAAFRAAAAUQJSAgAAAAFUAAAAVAJVAQAAAAEHBQAApgEAIEICAAAAAUdAAAAAAVkBAAAAAVoBAAAAAVsCAAAAAVwBAAAAAQIAAAABACATAACqAQAgAwAAAAsAIBMAAKoBACAUAACuAQAgCQAAAAsAIAUAAJMBACAMAACuAQAgQgIAewAhR0AAfQAhWQEAkQEAIVoBAJEBACFbAgB7ACFcAQCRAQAhBwUAAJMBACBCAgB7ACFHQAB9ACFZAQCRAQAhWgEAkQEAIVsCAHsAIVwBAJEBACEHBAAApQEAIEICAAAAAUdAAAAAAVkBAAAAAVoBAAAAAVsCAAAAAVwBAAAAAQIAAAABACATAACvAQAgAwAAAAsAIBMAAK8BACAUAACzAQAgCQAAAAsAIAQAAJIBACAMAACzAQAgQgIAewAhR0AAfQAhWQEAkQEAIVoBAJEBACFbAgB7ACFcAQCRAQAhBwQAAJIBACBCAgB7ACFHQAB9ACFZAQCRAQAhWgEAkQEAIVsCAHsAIVwBAJEBACEDBAYCBQgDBgAEAQMAAQEDAAEBBAkAAAAABQYACRkAChoACxsADBwADQAAAAAABQYACRkAChoACxsADBwADQEDAAEBAwABBQYAEhkAExoAFBsAFRwAFgAAAAAABQYAEhkAExoAFBsAFRwAFgEDAAEBAwABBQYAGxkAHBoAHRsAHhwAHwAAAAAABQYAGxkAHBoAHRsAHhwAHwcCAQgKAQkNAQoOAQsPAQ0RAQ4TBQ8UBhAWAREYBRIZBxUaARYbARccBR0fCB4gDh8hAiAiAiEjAiIkAiMlAiQnAiUpBSYqDycsAiguBSkvECowAisxAiwyBS01ES42Fy84AzA5AzE7AzI8AzM9AzQ_AzVBBTZCGDdEAzhGBTlHGTpIAztJAzxKBT1NGj5OIA',
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require('@prisma/client/runtime/query_compiler_fast_bg.postgresql.js'))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require('@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js')));
        return await decodeBase64AsWasm(wasm);
    },
    importName: './query_compiler_fast_bg.js',
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map