import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
alert('main.js成功运行了!!!!!!')

// 处理高级的ES6语法
// 默认webpack只可以处理部分ES6的语法
class Person {
    static info = {
        name: 'zs',
        age: 20
    }
}
console.log(Person.info)