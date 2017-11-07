import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
var MzMediaService = (function () {
    function MzMediaService() {
        // based on nodes_modules/materialize-css/sass/components/_variable.scss
        this.mediaBreakpoints = [
            { alias: 's', minWidth: 0, maxWidth: 600 },
            { alias: 'm', minWidth: 601, maxWidth: 992 },
            { alias: 'l', minWidth: 993, maxWidth: 1200 },
            { alias: 'xl', minWidth: 1201, maxWidth: Number.MAX_VALUE },
        ];
        this.matchOperators = [
            {
                operator: 'gt',
                match: function (breakpoint) { return window.innerWidth > breakpoint.maxWidth; },
            },
            {
                operator: 'lt',
                match: function (breakpoint) { return window.innerWidth < breakpoint.minWidth; },
            },
            {
                operator: null,
                match: function (breakpoint) { return window.innerWidth >= breakpoint.minWidth && window.innerWidth <= breakpoint.maxWidth; },
            },
        ];
        this.media = this.registerWindowResizeListener();
    }
    MzMediaService.prototype.isActive = function (breakpoint) {
        var _this = this;
        return new Observable(function (subscriber) {
            _this.media.subscribe(function (media) {
                subscriber.next(_this.isActiveBreakpoint(breakpoint));
            });
        });
    };
    MzMediaService.prototype.registerWindowResizeListener = function () {
        var _this = this;
        return Observable.fromEvent(window, 'resize')
            .map(function () { return _this.getWindowMedia(); })
            .startWith(this.getWindowMedia())
            .publishReplay(1)
            .refCount();
    };
    MzMediaService.prototype.getWindowMedia = function () {
        return {
            alias: this.mediaBreakpoints.find(function (breakpoint) { return window.innerWidth <= breakpoint.maxWidth; }).alias,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
        };
    };
    MzMediaService.prototype.isActiveBreakpoint = function (breakpoint) {
        var matchOperator;
        var mediaBreakpoint;
        if (breakpoint) {
            var fragments_1 = breakpoint.split('-');
            if (fragments_1.length === 1) {
                matchOperator = this.matchOperators.find(function (x) { return x.operator === null; });
                mediaBreakpoint = this.mediaBreakpoints.find(function (x) { return x.alias === fragments_1[0]; });
            }
            else if (fragments_1.length === 2) {
                matchOperator = this.matchOperators.find(function (x) { return x.operator === fragments_1[0]; });
                mediaBreakpoint = this.mediaBreakpoints.find(function (x) { return x.alias === fragments_1[1]; });
            }
        }
        if (!mediaBreakpoint || !matchOperator) {
            throw Error("MzMediaService.isActive parameter is invalid: '" + breakpoint + "' is not a recognized breakpoint.");
        }
        return matchOperator.match(mediaBreakpoint);
    };
    return MzMediaService;
}());
export { MzMediaService };
MzMediaService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzMediaService.ctorParameters = function () { return []; };
