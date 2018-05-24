import './css/intruction.css';
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
}
