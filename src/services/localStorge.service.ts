export const localStorageService = {
  set: (key: string, value: any): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON?.stringify(value));
    }
  },
  remove: (key: string): void => {
    if (typeof window !== "undefined") {
      localStorage?.removeItem(key);
    }
  },
  get: <T>(key: string) => {
    if (typeof window !== "undefined") {
      const item = localStorage?.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  },
};
