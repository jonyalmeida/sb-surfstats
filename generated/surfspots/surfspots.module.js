"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurfspotsModule = void 0;
const common_1 = require("@nestjs/common");
const surfspots_controller_1 = require("./surfspots.controller");
const surfspots_service_1 = require("./surfspots.service");
let SurfspotsModule = class SurfspotsModule {
};
SurfspotsModule = __decorate([
    common_1.Module({
        controllers: [surfspots_controller_1.SurfspotsController],
        providers: [surfspots_service_1.SurfspotsService],
    })
], SurfspotsModule);
exports.SurfspotsModule = SurfspotsModule;
//# sourceMappingURL=surfspots.module.js.map