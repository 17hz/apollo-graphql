const APP_ID = '';
const APP_KEY = '';
const AV = require('leancloud-storage');
const {User} = AV;

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

const Dog = AV.Object.extend('Dog');
const dog = new Dog();
dog.get('name').then(a=> console.log(a));

