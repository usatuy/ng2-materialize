import { ComponentFixture } from '@angular/core/testing';
export declare function buildComponent<T>(template: string, bindings?: {
    [key: string]: any;
}): Promise<ComponentFixture<T>>;
