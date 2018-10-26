const APP_ID = '';
const APP_KEY = '';
const AV = require('leancloud-storage');
const {User} = AV;

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

const Dog = AV.Object.extend('Dog')
const dog = new Dog()
// dog.set('name','tom');
dog.get('name').then(a=> console.log(a));
// dog.save().then(dog => console.log(dog) , e=> console.log(e) )

