export interface Apps {
  runInParallel(urls: string[], concurrency: number): Promise<string[]>;
}
