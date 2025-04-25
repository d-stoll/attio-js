import { test, expect } from "vitest";
import { Attio } from "../src/index.js";

test("Lists people records.", async () => {
    const attio = new Attio();
    
    const result = await attio.records.query({
        object: "people",
        requestBody: {
          limit: 500,
          offset: 0,
        },
      });

    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
})

test("Create a new person.", async () => {
    const attio = new Attio();
    
    const result = await attio.records.create({
        object: "people",
        requestBody: {
          data: {
            values: {
                name: "John Doe",
                email_addresses: [
                    "john.doe@example.com"
                ]
            }
          }
        },
      });

    console.log(result.data);

    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
})