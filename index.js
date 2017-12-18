'use strict';

class Validi{
    constructor(rule){
        if(!!rule){
            var k = Object.keys(rule)
            this._rule = {}
            k.forEach(element => {
                if(typeof(rule[element]) === 'function'){
                    this._rule[element] = rule[element]
                    
                }
            });
        }
    }

    Is(value){
        return new RuleWithData(value, this._rule)
    }

    Are(values){
        return new RuleWithData(values, this._rule)
    }
}

class RuleWithData{
    constructor(data, rule){
        this._data = data
        this._rule = rule
    }

    _(rulename){
        return this._rule[rulename](this._data)
    }
}

module.exports = Validi