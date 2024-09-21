// 使用declare的目的：
// 1、声明全局变量或类型，让TypeScript编译器能够识别理解这些外部环境中已存在的内容
// 而不需要在当前文件中提供具体的实现或定义。
// 原因：
// 1、与外部库集成：
// 2、类型定义文件：
// 3、全局命名空间和模块描述：
declare type DeclarePerson = {
  name: string;
  age: string;
  sex: string;
};

// *d.ts
// 1、声明文件：
// 定义：.d.ts后缀的问题件
// 特点：里面不允许有任何实现，顶层作用于只能出现declare、import、export、interface、三斜线指令

// 2、全局类声明文件：
// 定义：如果一个声明文件的顶层作用域中没有import、export，那么这个声明文件就是一个全局类声明文件
// 特点：如果一个全局类声明文件在ts处理范围内，那么全局类声明文件中的declare会在全局生效。

// 3、模块类声明文件：
// 定义：如果一个声明文件的顶层作用域中有import或export, 那么这个声明文件就是一个模块类声明文件
// 特点：里面的declare不会在全局生效，需要按模块的方式导出来才能生效。
// export type TypeDefinitionA = {
//   a: string;
// };

// 4、若使用了declare namespace NameSpaceA的方式，则可以通过命名空间的方式，解决命名冲突，且在其他文件使用
// NameSpaceA时不用import引入。
// InterfaceA就成了ApiA内局部的了
declare namespace ApiA {
  interface InterfaceA {
    name: string;
  }
}

// type、interface前加不加declare都可以，都能在其他ts文件中直接引用
interface InterfaceA {
  name: string;
}

// namespace定义时，必须加上：declare，否则报错（通过测试发现不太对）
namespace ApiB {
  interface InterfaceA {
    name: string;
  }
}

declare namespace ApiC {
  interface InterfaceA {
    name: string;
  }
}

// *.d.ts文件中的顶级声明必须以"declare"或"export"修饰符开头（目前测试发现不行）
const constA = 'constA';

// declare关键字除了可以声明全局类型之外，它还可以用来声明全局函数、全局类或全局枚举类型等
// 我们平时用的eval、isNaN、encodeURI、parseInt就是在lib.es5.d.ts声明文件中声明的。

type TypeDefinitionB = {
  b: string;
};

export type TypeDefinitionC = {
  c: string;
};

export type TypeDefinitionFun = (type: any) => void;

// 

//# sourceMappingURL=tsTypeDefinition.d.ts.map
