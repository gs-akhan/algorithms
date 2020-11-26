const states = {
    PENDING: "prnding",
    FULFILLED: "fulfilled",
    REJECTED: "rejected"

}
class NewPromise {
    _state = states.PENDING;
    _value = null;
    _reason = "";
    _thenQueue = [];
    constructor(computation) {
        try {
            if (typeof computation === "function") {
                setTimeout(() => {
                    computation.call(null, this.onFulFilled.bind(this), this.onRejected.bind(this));
                })
            }
        } catch (e) {
        }
    }

    onFulFilled(value) {
        this._state = states.FULFILLED;
        this._value = value;
        this._propagateFulfilled();
    }
    onRejected(reason) {
        this._state = states.REJECTED;
        this._reason = reason;
    }

    then(fullFilledFn, catchFn) {
        let controlledPromise = new NewPromise();
        this._thenQueue.push([controlledPromise, fullFilledFn, catchFn]);

        if (this._state === states.FULFILLED) {
            this._propagateFulfilled();
        } else if (this._state === states.REJECTED) {
            this._propagateRejected();
        }

        return controlledPromise;

    }

    _propagateFulfilled() {
        this._thenQueue.forEach(([controlledPromise, fullFilledFn]) => {
            const value = fullFilledFn(this._value);
            controlledPromise.onFulFilled(value);
        });
        this._thenQueue = [];
    }
}


let p = new NewPromise((yes, no) => {
    setTimeout(() => {
        yes("Azhar is here");
    }, 5000);
});

p.then((data) => { console.log(data); return 20; }).then(data => console.log(data));