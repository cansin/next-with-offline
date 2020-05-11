import "fake-indexeddb/auto";

import hasWorkbox from "./hasWorkbox";

describe("hasWorkbox", () => {
  it("is truthy", () => {
    expect(hasWorkbox).toBeTruthy();
  });
});
