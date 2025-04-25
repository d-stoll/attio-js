import { test, expect } from "vitest";
import { Attio } from "../src/index.js";

test("List all tasks.", async () => {
    const attio = new Attio();
    
    const result = await attio.tasks.list({
        limit: 10,
        offset: 5,
        sort: "created_at:desc",
      });

    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
})