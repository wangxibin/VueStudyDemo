export function createGlobalDirective(app, directiveNames = []) {
  // 全局注册directive指令，另一种是局部注册directive指令
  for (const directiveName of directiveNames) {
    app.directive(directiveName, {
      mounted(el, binding, vnode, preVnode) {
        console.log(`directive=>${directiveName}=>el`, el);
        console.log(`directive=>${directiveName}=>binding`, binding);
        console.log(`directive=>${directiveName}=>vnode`, vnode);
        console.log(`directive=>${directiveName}=>preVnode`, preVnode);
      },
    });
  }

  // 这个指令的功能是当绑定的元素插入到DOM中时，自动聚焦到该元素上（例如输入框）
  app.directive("focus", {
    mounted(el, binding, vnode, preVnode) {
      console.log("directive=>focus=>el", el);
      console.log("directive=>focus=>binding", binding);
      console.log("directive=>focus=>vnode", vnode);
      console.log("directive=>focus=>preVnode", preVnode);
      el.focus();
    },
  });

  // 这个指令的功能是将绑定元素的文本颜色设置为指令参数提供的颜色。
  app.directive("color", {
    updated(el, binding, vnode, preVnode) {
      console.log("directive=>color=>el", el);
      console.log("directive=>color=>binding", binding);
      console.log("directive=>color=>vnode", vnode);
      console.log("directive=>color=>preVnode", preVnode);
      el.style.color = binding.value;
    },
  });

  // 这个指令的功能是记录绑定元素到控制台，并可以通过修饰符来决定记录的内容（例如元素本身或元素的类名）。
  app.directive("log", {
    // 当绑定元素插入到 DOM 中。
    mounted(el, binding, vnode, preVnode) {
      console.log("directive=>log=>el", el);
      console.log("directive=>log=>binding", binding);
      console.log("directive=>log=>vnode", vnode);
      console.log("directive=>log=>preVnode", preVnode);
      if (binding.modifiers.class) {
        console.log("Class:", el.className);
      } else {
        console.log("Element:", el);
      }
    },
  });
}
