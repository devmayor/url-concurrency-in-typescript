/**
 * A function to split any array into chunks of smaller array based on the divider
 * @param list array
 * @param divider number
 * @returns
 */
export function splitter(list: any[], divider: number): Array<any[]> {
  const collection: Array<any[]> = [];
  if (divider < 1) {
    throw new Error("Array cannot be divided by 0 or less");
  }
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (index % divider != 0) {
      collection[collection.length - 1].push(element);
    } else {
      collection.push([element]);
    }
  }
  return collection;
}
