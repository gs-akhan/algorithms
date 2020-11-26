console.log("Here we will learn middle ware pattnern");
console.log("==============================");

const App = () => {

    var middlewares = [];
    const runMiddlware = (index, fn) => {
        if (index < middlewares.length) {
            middlewares[index].call(null, () => { runMiddlware(++index, fn) });
        } else {
            fn();
        }
    };

    const get = (fn) => {
        runMiddlware(0, fn);
    }

    const use = (fn) => {
        middlewares.push(fn);
    }

    return {
        get,
        use
    }
}


const app = App();


app.use(function (next) {

    setTimeout(() => {
        console.log("We are in Use:1");
        next();
    }, 3000);
});
app.use(function (next) {
    setTimeout(() => {
        console.log("We are in Use:2");
        next();
    }, 2000)
});
app.use(function (next) {
    console.log("We are in Use:3");
    next();
});
app.use(function (next) {
    console.log("We are in Use:4");
    next();
});

app.get(function () {
    console.log("We are in Get : 1");
});