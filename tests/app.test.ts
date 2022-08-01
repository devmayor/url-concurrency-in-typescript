import { App } from "../app";
const newApp = new App();
describe("Testing get url in parallel function", () => {
  test("It should return an array of strings", async () => {
    const result = await newApp.runInParallel(
      [
        "https://a11ysupport.io/tests/tech__html__links__example2#assertion-html-a(href)_element-convey_name-",
        "https://a11ysupport.io/tech/html/a(href)_element",
        "https://a11ysupport.io/tech/html/a(href)_element#description",
        "https://a11ysupport.io/tests/tech__html__links__example3",
        "https://a11ysupport.io/tests/tech__html__links__example4",
        "https://a11ysupport.io/tests/tech__html__links__example5",
      ],
      4
    );
    expect(result.length).toBe(6);
  }, 10000);
  test("It should run longer because of a smaller concurrency value", async () => {
    const result = await newApp.runInParallel(
      [
        "https://a11ysupport.io/tests/tech__html__links__example2#assertion-html-a(href)_element-convey_name-",
        "https://a11ysupport.io/tech/html/a(href)_element",
        "https://a11ysupport.io/tech/html/a(href)_element#description",
        "https://a11ysupport.io/tests/tech__html__links__example3",
        "https://a11ysupport.io/tests/tech__html__links__example4",
        "https://a11ysupport.io/tests/tech__html__links__example5",
      ],
      1
    );
    expect(result.length).toBe(6);
  }, 15000);
});
