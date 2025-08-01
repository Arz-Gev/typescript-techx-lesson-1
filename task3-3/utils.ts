// Step 2: Create a utils.ts module with a utility function (e.g., capitalize, logMessage).

export function capitalize(str: string): string {
  let arr: string[] = str.split(" ");
  return arr.map((e) => e[0]?.toUpperCase() + e.slice(1)).join(" ");
}

export function logMessage(str: string): void {
  console.log(str);
}
