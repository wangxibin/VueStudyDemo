export default {
  install(app) {
    console.log('js文件夹=>studyUseThis=>index.js=>app', app);
    app.config.globalProperties.$myLoading = '加载中...';
    console.log('js文件夹=>studyUseThis=>index.js=>添加myLoading后的app', app);
  },
};
 