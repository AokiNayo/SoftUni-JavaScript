function calculator() {
    let selector1, selector2, resultSelector;

    return {
        init: function (selector1Param, selector2Param, resultSelectorParam) {
            selector1 = document.querySelector(selector1Param);
            selector2 = document.querySelector(selector2Param);
            resultSelector = document.querySelector(resultSelectorParam);
        },
        add: function () {
            let result = Number(selector1.value) + Number(selector2.value);
            resultSelector.value = result;
        },
        subtract: function () {
            let result = Number(selector1.value) - Number(selector2.value);
            resultSelector.value = result;
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
