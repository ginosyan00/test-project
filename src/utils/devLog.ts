export function devLog(tag: string, ...args: unknown[]) {
  if (!import.meta.env.DEV) return;
  // eslint-disable-next-line no-console
  console.groupCollapsed(`%c[${tag}]`, 'color:#10b981');
  // eslint-disable-next-line no-console
  console.log(...args);
  // eslint-disable-next-line no-console
  console.groupEnd();
}
