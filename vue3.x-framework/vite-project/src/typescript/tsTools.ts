// TS内置的一些常用工具类型，简化TS的操作，他们都是基于泛型实现的，并且内置的，可直接使用。

import { Person } from "./tsInterface";

// 1、Pick（选择）
// 通俗的说法就是：在已经定义的对象中选取一些
// Pick<T, keys>：从T中选择一系列属性来构造新类型，属性来源于keys
// Pick两个类型变量：T：表示选择谁的属性，keys：表示选择哪几个属性（传入属性名，只能是第一个类型变量中存在的属性）
type PickProps = Pick<Person, "name" | "age">;
// 生成的新类型，只有name，age两个属性类型相当于
// interface Person {
//   name: String;
//   age: Number;
// }

// 2、Omit（省略）
// Omit<T, keys>通俗的说法就是：在已经定义的对象中删除一些。
type OmitProps = Omit<Person, "name" | "age">;
// 生成的新类型，没有name，age两个属性类型相当于
// interface Person {
//   sex: String;
//   address: String;
//   hobby: String;
// }

// 3、Exclude（排除/不包括）
// Exclude<T,U>通俗的说法就是：返回没有包含的那个
// 从联合类型T中删除也出现再联合类型U中的类型。
type UniteT = "name" | "age" | "sex";
type UniteU = "name" | "age" | "hobby" | "address";
type ExcludeProps = Exclude<UniteT, UniteU>;
// 生成的新类型，从UniteT中删除UnitU中也有的类型。
// 相当于
// type ExcludeProps = "sex";
type UniteT1 = "name" | "age" | "sex";
type UniteU1= "name" | "age" | "sex" | "hobby" | "address";
type ExcludeProps1 = Exclude<UniteT1, UniteU1>;
// 相当于never

// 4、Extract（提取/包括）
// Extract<T,U>通俗的说法就是：返回包含的那个
// 从联合类型T中删除也出现再联合类型U中的类型。
type ExtractT = "name" | "age" | "sex";
type ExtractU = "name" | "age" | "hobby" | "address";
type ExtractProps = Extract<UniteT, UniteU>;
// 生成的新类型，从UniteT中删除UnitU中也有的类型。
// 相当于
// type ExcludeProps = "name" | "age";
type ExtractT1 = "name" | "age" | "sex";
type Extract1=  "hobby" | "address";
type ExtractProps1 = Extract<ExtractT1, Extract1>;
// 相当于never
