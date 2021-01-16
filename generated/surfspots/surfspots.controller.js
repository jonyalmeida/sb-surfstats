"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurfspotsController = void 0;
const common_1 = require("@nestjs/common");
const surfspots_service_1 = require("./surfspots.service");
const create_surfspot_dto_1 = require("./dto/create-surfspot.dto");
let SurfspotsController = class SurfspotsController {
    constructor(surfspots) {
        this.surfspots = surfspots;
    }
    getAllSurfspots() {
        return this.surfspots.getAllSurfspots();
    }
    createSurfspot(createSurfspotDto) {
        console.log('body', createSurfspotDto);
        return this.surfspots.createSurfspot(createSurfspotDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SurfspotsController.prototype, "getAllSurfspots", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_surfspot_dto_1.CreateSurfspotDto]),
    __metadata("design:returntype", Object)
], SurfspotsController.prototype, "createSurfspot", null);
SurfspotsController = __decorate([
    common_1.Controller('surfspots'),
    __metadata("design:paramtypes", [surfspots_service_1.SurfspotsService])
], SurfspotsController);
exports.SurfspotsController = SurfspotsController;
//# sourceMappingURL=surfspots.controller.js.map