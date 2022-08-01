import { splitter } from "./helpers/common";
import axios from "axios";
import { Apps } from "./interfaces/app";

export class App implements Apps {
  async runInParallel(urls: string[], concurrency: number): Promise<string[]> {
    const data: any[] = [];
    try {
      const urlChunks = splitter(urls, concurrency);
      for (const urlChunk of urlChunks) {
        const requests = urlChunk.map((url) => {
          return axios.get(url);
        });
        let urlResponses = await Promise.all(requests);
        urlResponses = urlResponses.map((data) => {
          return data.data;
        });
        data.push(...urlResponses);
      }
    } catch (error) {
      console.log(error);
    }
    return data;
  }
}
