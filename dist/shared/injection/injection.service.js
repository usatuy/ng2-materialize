import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, } from '@angular/core';
var MzInjectionService = (function () {
    function MzInjectionService(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Appends a component to an adjacent location.
     *
     * @template T
     * @param {Type<T>} componentClass
     * @param {*} [options={}]
     * @param {Element} [location=this.getRootViewContainerNode()]
     * @returns {ComponentRef<T>}
     *
     * @memberOf MzInjectionService
     */
    MzInjectionService.prototype.appendComponent = function (componentClass, options, location) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (location === void 0) { location = this.getRootViewContainerNode(); }
        // instantiate component to load
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var componentRef = componentFactory.create(this.injector);
        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        // attach view for dirty checking
        this.applicationRef.attachView(componentRef.hostView);
        // detach view when component is destroyed
        componentRef.onDestroy(function () {
            _this.applicationRef.detachView(componentRef.hostView);
        });
        // append component to location in the DOM where we want it to be rendered
        var componentRootNode = this.getComponentRootNode(componentRef);
        location.appendChild(componentRootNode);
        return componentRef;
    };
    /**
     * Overrides the default root view container.
     *
     * @param {any} container
     *
     * @memberOf MzInjectionService
     */
    MzInjectionService.prototype.setRootViewContainer = function (container) {
        this.container = container;
    };
    /**
     * Gets the root view container to inject the component to.
     *
     * @template T
     * @returns {ComponentRef<T>}
     *
     * @memberOf MzInjectionService
     */
    MzInjectionService.prototype.getRootViewContainer = function () {
        if (this.container) {
            return this.container;
        }
        var rootComponents = this.applicationRef['components'];
        if (rootComponents.length) {
            return rootComponents[0];
        }
        throw Error('View Container not found! It needs to be manually set via setRootViewContainer.');
    };
    /**
     * Gets the html element for a component ref.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     *
     * @memberOf MzInjectionService
     */
    MzInjectionService.prototype.getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf MzInjectionService
     */
    MzInjectionService.prototype.getRootViewContainerNode = function () {
        var rootViewContainer = this.getRootViewContainer();
        return this.getComponentRootNode(rootViewContainer);
    };
    /**
     * Projects the inputs onto the component.
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     *
     * @memberOf MzInjectionService
     */
    MzInjectionService.prototype.projectComponentInputs = function (component, options) {
        if (options) {
            var props = Object.getOwnPropertyNames(options);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                component.instance[prop] = options[prop];
            }
        }
        return component;
    };
    return MzInjectionService;
}());
export { MzInjectionService };
MzInjectionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzInjectionService.ctorParameters = function () { return [
    { type: ApplicationRef, },
    { type: ComponentFactoryResolver, },
    { type: Injector, },
]; };
