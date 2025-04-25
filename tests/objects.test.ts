import { test, expect } from "vitest";
import { Attio } from "../src/index.js";

test("Lists all system-defined and user-defined objects in your workspace.", async () => {
    const attio = new Attio();
    
    const result = await attio.objects.list();

    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeGreaterThan(3);
})