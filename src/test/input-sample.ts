import { JSONObject } from "../mytype";

// Example Schema usage
export const sampleSchema: JSONObject = {
    firstName: 'string',
    lastName: 'string',
    age: 'number',
    isActive: 'boolean',
    birthdate: 'date',
    address: {
      street: 'string',
      city: 'string',
      zipCode: 'string',
    },
    hobbies: [
      {
        name: 'string',
        level: 'string',
      },
    ],
    friends: [
      {
        name: 'string',
        age: 'number',
      },
    ],
  };