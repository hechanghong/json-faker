import { generateSampleJsonData } from "./jsonGenerator";
import { policySchema } from "./test/input-policy";
import { sampleSchema } from "./test/input-sample";

const sampleJsonData = generateSampleJsonData(sampleSchema);
console.log("=============>>>Sample Schema>>>",JSON.stringify(sampleJsonData, null, 2));

const policyJsonData = generateSampleJsonData(policySchema);
console.log("=============>>>Policy Schema>>>",JSON.stringify(policyJsonData, null, 2));



