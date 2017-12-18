var Validi = require('../index')

describe('instanciate test', () => {
    it('should create new instace validi', () => {
        var di = new Validi()
        expect(di).toBeDefined()
    })
})

describe('verify', ()=> {
    it('should be true when verify agoda email', () => {
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var di = new Validi({
            AgodaEmail:isAgodaEmailValidator
        })

        expect(di.Is("ntossapo@agoda.com")._(AgodaEmail)).toBe(true)
    })

    it('should be false when enter gmail and verify with agoda email pattern', () =>{
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var di = new Validi({
            AgodaEmail:isAgodaEmailValidator
        })

        expect(di.Is("ntossapo@gmail.com")._(AgodaEmail)).toBe(false)
    })
})

describe('create instance with rule', () => {
    it('should be create validi with rule', () => {
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var di = new Validi({
            AgodaEmail:isAgodaEmailValidator
        })

        expect(di._rule[AgodaEmail]).toBe(isAgodaEmailValidator)
    })

    it('should be able to create validi with more than 1 rules', () => {
        const AgodaEmail = "AgodaEmail"
        const IsDecimal = "IsDecimal"

        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        const isNumber = (data) => {
            return typeof(data) == 'number'
        }

        var di = new Validi({
            AgodaEmail:isAgodaEmailValidator,
            IsDecimal:isNumber
        })

        expect(di._rule[AgodaEmail]).toBe(isAgodaEmailValidator)
        expect(di._rule[IsDecimal]).toBe(isNumber)
    })

    it('should not be able to create validi with non-function as validator', () => {
        const AgodaEmail = "isEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var di = new Validi({
            AgodaEmail:isAgodaEmailValidator
        })

        expect(di._rule[AgodaEmail]).toBeUndefined()
    })
})

