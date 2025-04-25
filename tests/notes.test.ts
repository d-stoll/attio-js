import { test, expect } from "vitest";
import { Attio } from "../src/index.js";

test("List notes for all records.", async () => {
    const attio = new Attio();
    
    const result = await attio.notes.list({
        limit: 10,
        offset: 5
      });

    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
})