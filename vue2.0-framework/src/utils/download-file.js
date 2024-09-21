const downloadModel = ()=>{
  const token = getToken()
  return axios({
      //此处使用代理方式导出文件，否则提示跨域
      url: process.env.VUE_APP_BASE_API + u,
      method: 'get',
      params: {
      },
      responseType: 'blob',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
}
}

const downloadModel2 = ()=>{
  let url = "/into/stock/download";//接口地址
  downloadModel(url).then((res) => {
    const fileName = decodeURI(
      // 获取文件名
      res.headers["content-disposition"].split("=")[1]
    );
    // Blob 对象表示一个不可变、原始数据的类文件对象（File 接口都是基于Blob）
    const BLOB = res.data;
    // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件的内容
    const fileReader = new FileReader();
    // 开始读取指定的Blob中的内容。读取完成result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容

    if (BLOB) {
      // 此处判断是否有数据，也可以在此判断文件类型是否符合
      fileReader.readAsDataURL(BLOB);
    }

    // 处理load事件，该事件在读取操作完成时触发
    fileReader.onload = (event) => {
      let a = document.createElement("a");
      //a.download = `出库明细表.xls`; // 自定义文件名
      a.download = fileName; // 使用默认的文件名
      a.href = event.target.result;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    this.$message({
      type: "success",
      message: "正在导出,请稍后!",
    });
  });
}


export default {
  downloadModel,
  downloadModel2
}
