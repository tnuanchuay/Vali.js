# Vali.js

Nodejs Validator

### Validate with your rule
```js
  const AgodaEmail = "AgodaEmail"
  const isAgodaEmailValidator = (data) => {
    return /[\w]*@agoda.com/g.test(data)
  }

  var $$ = new ValiJ$({
    AgodaEmail:isAgodaEmailValidator
  })

  $$._("ntossapo@agoda.com")._(AgodaEmail)
```

### Multiple Validate
```js
  $$._(["ntossapo@agoda.com", "any@agoda.com", "someone@agoda.com"])._(AgodaEmail)
```

### Multi rule
```
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

  $$._(["ntossapo@agoda.com", "any@agoda.com"])._([AgodaEmail, Email])
```
