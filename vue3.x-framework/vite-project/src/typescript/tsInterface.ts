// interface是真正用来定义接口类型（约束类型和属性），支持集成和声明合并

// interface：接口
// TS设计接口主要用于定义对象类型，可以对对象进行描述，
// 接口声明只存在编译阶段，编译后就不存在了

// 可以合并众多类型声明到一个类型声明

// 1、interface：定义接口的关键字
// 2、Person：接口名，首字母需要大写

// （1）interface可以重复声明，type定义后不能重复声明
// 重复声明之后会合并成一个接口，相同属性会覆盖
interface PersonA {
  name: String;
}

interface PersonA {
  age: Number;
}

interface PersonB {
  sex: String;
}

interface PersonC {
  address: String;
}

//（2）interface可以通过"extends"来继承接口，高效且不用重复定义
// type只能通过&实现类似于继承的功能
export interface Person extends PersonA {}

//（3）interface可以extends多个接口
export interface Person extends PersonA, PersonB, PersonC {
  hobby: String;
}

const person: Person = {
  name: "王熙斌",
  age: 31,
  sex: "男",
  address: "广东省深圳市南山区沙河观景阁1418室",
  hobby: "学习，除了学习就是学习",
};
console.log('person', person);
