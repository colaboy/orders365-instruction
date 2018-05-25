// import Route from './utils/backbone-route'; // 路由监听
import './less/intruction.less';
import jsonData from './data.json';
import FastClick from 'fastclick';

// 绑定fastclick
FastClick.attach(document.body);

// 文档完毕
window.onload = function(){
  const render = require('./art/index.art');
  const container = document.getElementById("container");
  const html = render({data: jsonData.data});
  container.innerHTML = html;
  // 建筑物动画
  setTimeout(() => {
    const instructionPage = document.querySelector('.instruction-bg');
    instructionPage.classList.add('instruction-enter');
  }, 100);
  // 路由监听示例
  // Route.init({
  //   'module1': function(){
  //       console.log(1);
  //   },
  //   'module2/:name/:age': function(){
  //       console.log(2, arguments);
  //   },
  //   'module3(/:name)(/:age)': function(){
  //       console.log('3', arguments);
  //   },
  //   '*': function(){
  //       console.log(404);
  //   }
  // });
}
