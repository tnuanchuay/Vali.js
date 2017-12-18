var ValiJ$ = require('../index')

describe('instanciate test', () => {
    it('should create new instace ValiJ$', () => {
        var $$ = new ValiJ$()
        expect($$).toBeDefined()
    })
})

describe('verify', ()=> {
    it('should be true when verify agoda email', () => {
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator
        })

        expect($$._("ntossapo@agoda.com")._(AgodaEmail)).toBe(true)
    })

    it('should be false when enter gmail and verify with agoda email pattern', () =>{
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator
        })

        expect($$._("ntossapo@gmail.com")._(AgodaEmail)).toBe(false)
    })

    it('should be true when varify multiple agoda emails', () => {
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator
        })

        expect($$._(["ntossapo@agoda.com", "any@agoda.com", "someone@agoda.com"])._(AgodaEmail)).toBe(true)
    })

    it('should be false when validate multiple agoda emails and one of them is not', () => {
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator
        })

        expect($$._(["ntossapo@agoda.com", "any@agoda.com", "someone@gmail.com"])._(AgodaEmail)).toBe(false)
    })

    it('should be true when validate email with agoda email and normal email', () => {
        const AgodaEmail = "AgodaEmail"
        const Email = "Email"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        const EmailValidator = (data) => {
            return /[\w]*@[\w]*.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator,
            Email:EmailValidator
        })

        expect($$._("ntossapo@agoda.com")._([AgodaEmail, Email])).toBe(true)
    })

    it('should be false when validate non-email with agoda email and normail email pattern', () => {
        const AgodaEmail = "AgodaEmail"
        const Email = "Email"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        const EmailValidator = (data) => {
            return /[\w]*@[\w]*.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator,
            Email:EmailValidator
        })

        expect($$._("ieie")._([AgodaEmail, Email])).toBe(false)
    })

    it('should be true when validate multiple email with agoda email and normail email pattern', () => {
        const AgodaEmail = "AgodaEmail"
        const Email = "Email"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        const EmailValidator = (data) => {
            return /[\w]*@[\w]*.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator,
            Email:EmailValidator
        })

        expect($$._(["ntossapo@agoda.com", "any@agoda.com"])._([AgodaEmail, Email])).toBe(true)
    })

    it('should be true when validate multiple email with agoda email and normail email pattern one of email is not agoda email', () => {
        const AgodaEmail = "AgodaEmail"
        const Email = "Email"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        const EmailValidator = (data) => {
            return /[\w]*@[\w]*.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator,
            Email:EmailValidator
        })

        expect($$._(["ntossapo@gmail.com", "any@agoda.com"])._([AgodaEmail, Email])).toBe(false)
    })
})

describe('create instance with rule', () => {
    it('should be create ValiJ$ with rule', () => {
        const AgodaEmail = "AgodaEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator
        })

        expect($$._rule[AgodaEmail]).toBe(isAgodaEmailValidator)
    })

    it('should be able to create ValiJ$ with more than 1 rules', () => {
        const AgodaEmail = "AgodaEmail"
        const IsDecimal = "IsDecimal"

        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        const isNumber = (data) => {
            return typeof(data) == 'number'
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator,
            IsDecimal:isNumber
        })

        expect($$._rule[AgodaEmail]).toBe(isAgodaEmailValidator)
        expect($$._rule[IsDecimal]).toBe(isNumber)
    })

    it('should not be able to create ValiJ$ with non-function as validator', () => {
        const AgodaEmail = "isEmail"
        const isAgodaEmailValidator = (data) => {
            return /[\w]*@agoda.com/g.test(data)
        }

        var $$ = new ValiJ$({
            AgodaEmail:isAgodaEmailValidator
        })

        expect($$._rule[AgodaEmail]).toBeUndefined()
    })
})

