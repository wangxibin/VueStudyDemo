// type：类型别名
// type更多的是对类型的一种复用，比如有些类型很复杂或者书写很长
// 为类型创建一个新名称，它并不是一个类型，只是一个别名

import { Person } from "./tsInterface";

// 1、type：声明类型别名的关键字
// 2、P：类型别名的名称
// 3、Person：类型别名关联的具体类型
type P = Person;

// type不允许重复声明
type PersonA = {
  name: String;
};

// type PersonA = {
//   age: Number;
// };

type PersonB = {
  sex: String;
  age: Number;
};

type PersonC = {
  address: String;
};

// type只能通过&实现类似于继承的功能
// type TypePerson = PersonA & PersonA & PersonA;
type person = PersonA &
  PersonB &
  PersonC & {
    hobby: String;
  };

const person: person = {
  name: "王熙斌",
  age: 31,
  sex: "男",
  address: "广东省深圳市南山区沙河观景阁1418室",
  hobby: "学习，除了学习就是学习",
};
console.log("person", person);

// type能够表示非对象类型
// 1、定义基本类型别名
type StringType = string;
// 2、声明联合类型
type ParamType = number | string;
// 3、声明元组类型
type ArrType = [string, string, number];

const st: StringType = "学习，除了学习就是学习";
console.log("st", st);

// const pt: paramType = 31;
const pt: ParamType = "学习，除了学习就是学习";
console.log("pt", pt);

const at: ArrType = ["王熙斌", "学习，除了学习就是学习", 31];
console.log("at", at);