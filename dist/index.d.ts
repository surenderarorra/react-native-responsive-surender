export declare const screenWidth: number;
export declare const screenHeight: number;
interface BreakPoint {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}
type SizeInput = number | BreakPoint;
export declare const size: (input: SizeInput) => number;
export {};
