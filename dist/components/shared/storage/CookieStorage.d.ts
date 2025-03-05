declare class CookieStorage implements Storage {
    setItem(k: string, v: any): void;
    getItem(k: string): string | null;
    clear(): void;
    removeItem(k: string): void;
    get length(): number;
    key(index: number): string;
}
export default CookieStorage;
