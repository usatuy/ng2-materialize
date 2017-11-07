var Handlers = (function () {
    function Handlers() {
    }
    return Handlers;
}());
export { Handlers };
var HandlePropChanges = (function () {
    function HandlePropChanges() {
    }
    HandlePropChanges.prototype.ngOnChanges = function (changes) {
        if (this.handlers) {
            this.executePropHandlers(changes);
        }
    };
    HandlePropChanges.prototype.executePropHandlers = function (props) {
        var _this = this;
        if (props === void 0) { props = this.handlers; }
        Object.keys(props).forEach(function (prop) {
            if (_this.handlers[prop]) {
                var previousValue = props[prop].previousValue;
                _this.handlers[prop](previousValue);
            }
        });
    };
    return HandlePropChanges;
}());
export { HandlePropChanges };
