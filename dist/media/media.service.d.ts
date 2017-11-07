import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { Media } from './models';
export declare class MzMediaService {
    media: Observable<Media>;
    private readonly mediaBreakpoints;
    private readonly matchOperators;
    constructor();
    isActive(breakpoint: string): Observable<boolean>;
    private registerWindowResizeListener();
    private getWindowMedia();
    private isActiveBreakpoint(breakpoint);
}