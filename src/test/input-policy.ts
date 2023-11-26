import { JSONObject } from "../mytype";

// Policy Schema usage
export const policySchema: JSONObject = {
    fullName: 'string',
    policyNumber: 'string',
    startDate: 'date',
    endDate: 'date',
    isActive: 'boolean',
    birthdate: 'date',
    address: {
      zipCode: 'string',
      city: 'string',
      machi: 'string',
      choumei: 'string',
      building: 'string',
      roomNo: 'number'
    },
    coverages: [
      {
        name: 'string',
        riskType: 'string',
        rate: 'number',
        amount: 'number',
        isRider: 'boolean',
        parties: [
          {
            name: 'string',
            gender: 'string',
            age: 'number',
            relationship:'string',
            isFamily: 'boolean',
            address: 
            {
              zipCode: 'string',
              city: 'string',
              machi: 'string',
              choumei: 'string',
              building: 'string',
              roomNo: 'number'
            },
          }
        ],
      },
    ],
    agency: [
      {
        agencyCode: 'string',
        agencyName: 'string',
        skill: 'string',
        agencyAddress:
        {
          zipCode: 'string',
          city: 'string',
          machi: 'string',
          choumei: 'string',
          building: 'string',
          roomNo: 'number'
        },
      }
    ],
  };