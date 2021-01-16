export interface Surfspot {
    id: string;
    title: string;
    description: string;
    url: string;
    topThree: SurfspotTopThree;
}
export declare enum SurfspotTopThree {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE"
}
