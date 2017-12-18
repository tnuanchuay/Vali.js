'use strict';

class Va$${
    constructor(rule){
        if(!!rule){
            var k = Object.keys(rule)
            this._rule = {}
            k.forEach(elem => {
                if(typeof(rule[elem]) === 'function'){
                    this._rule[elem] = rule[elem]
                    
                }
            });
        }
    }

    _(value){
        return new $$$(value, this._rule)
    }
}

class $$${
    constructor(data, rule){
        this._data = data
        this._rule = rule
    }

    _(rulename){
        if (!!!rulename)
            return undefined

        if(this._data.constructor != Array){
            this._data = [this._data]
        }
        
        if(rulename.constructor != Array){
            rulename = [rulename]
        }
        
        return this._data
            .map(x => this.__(rulename, x))
            .reduce((a, c) => a && c, true)
    }

    __(rulename, data){
        return rulename
            .map(x => this._rule[x](data))
            .reduce((a, c) => a && c, true)
    }
}

module.exports = Va$$