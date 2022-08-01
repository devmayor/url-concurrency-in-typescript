import { App } from "./app";

(async () => {
  const newApp = new App();

  const urls = [
    "https://a11ysupport.io/tests/tech__html__links__example2#assertion-html-a(href)_element-convey_name-",
    "https://a11ysupport.io/tech/html/a(href)_element",
    "https://a11ysupport.io/tech/html/a(href)_element#description",
    "https://a11ysupport.io/tests/tech__html__links__example3",
    "https://a11ysupport.io/tests/tech__html__links__example4",
    "https://a11ysupport.io/tests/tech__html__links__example5",
  ];

  await newApp.runInParallel(urls, 2);
})();
