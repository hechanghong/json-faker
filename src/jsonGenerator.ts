import { faker } from "./faker";
import { JSONObject } from "./mytype";

/**
 * Generate sample JSON data
 * @param schema 
 * @returns 
 */
export function generateSampleJsonData(schema: JSONObject | any): JSONObject {
  const result: JSONObject = {};

  for (const key in schema) {
    if (schema.hasOwnProperty(key)) {
      const type = schema[key];

      if (typeof type === 'string') {

        // ##### Basic data types
        switch (type) {
          case 'string':
            // result[key] = faker.person.fullName();
            result[key] = key + 'テスト'
            break;
          case 'number':
            result[key] = faker.number.int({ min: 0, max: 100 });
            break;
          case 'boolean':
            result[key] = true;
            break;
          case 'null':
            result[key] = null;
            break;
          case 'date':
            // result[key] = new Date().toLocaleDateString();
            faker.setDefaultRefDate('2023-01-01T00:00:00.000Z');
            result[key] = faker.date.past().toLocaleDateString();
            break;
          default:
            // Handle other string types if needed
            result[key] = `Custom Sample ${type}`;
            break;
        }

      } else if (Array.isArray(type)) {

        // ##### In case of an array
        // result[key] = type.map((item) => generateSampleJsonData(item));

        let resultArray: JSONObject[] = [];        
        type.map((item) => {
          resultArray.push(generateSampleJsonData(item));
          resultArray.push(generateSampleJsonData(item));
        });
        result[key] = resultArray;

      } else if (typeof type === 'object') {

        // ##### In case of an object
        result[key] = generateSampleJsonData(type);

      }
    }
  }

  return result;
}