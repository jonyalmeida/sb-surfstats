import { Surfspot } from './surfspots.model';
export declare class SurfspotsService {
    private surfspots;
    getAllSurfspots(): Surfspot[];
    createSurfspot(title: string, description: string, url: string): Surfspot;
}
