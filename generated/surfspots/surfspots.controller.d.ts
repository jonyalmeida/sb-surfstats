import { SurfspotsService } from './surfspots.service';
import { Surfspot } from '../../dist/surfspots/surfspots.model';
export declare class SurfspotsController {
    private surfspots;
    constructor(surfspots: SurfspotsService);
    getAllSurfspots(): Surfspot[];
    createSurfspot(title: string, description: string, url: string): Surfspot;
}
