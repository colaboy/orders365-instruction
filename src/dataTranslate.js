import data from './data.json';
import bronze from './images/bronze.png';
import sliver from './images/sliver.png';
import gold from './images/gold.png';
import whiteGold from './images/whiteGold.png';
import diamond from './images/diamond.png';
import star from './images/star.png';
function toPercent (data, total) {
  return data/total > 1 ? '100%' : `${Math.round(data/total * 100)}%`;
}
function round (n, decimals = 0) {
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}
// 称号转化为目标值和积分
const nameToData = (name) => {
  switch(name) {
    case '青铜': 
      return {
        visitTarget: 1,
        volumeTarget: 1,
        orderTarget: 1,
        refrigeratorTarget: 1,
        integral: 10,
        icon: bronze,
      }
    case '白银':
      return {
        visitTarget: 50,
        volumeTarget: 10,
        orderTarget: 20000,
        refrigeratorTarget: 20,
        integral: 20,
        icon: sliver,
      }
    case '黄金':
      return {
        visitTarget: 500,
        volumeTarget: 100,
        orderTarget: 50000,
        refrigeratorTarget: 100,
        integral: 35,
        icon: gold,
      }
    case '铂金':
      return {
        visitTarget: 1500,
        volumeTarget: 300,
        orderTarget: 100000,
        refrigeratorTarget: 300,
        integral: 50,
        icon: whiteGold,
      }
    case '钻石':
      return {
        visitTarget: 3000,
        volumeTarget: 500,
        orderTarget: 200000,
        refrigeratorTarget: 500,
        integral: 65,
        icon: diamond,
      }
    case '星耀':
      return {
        visitTarget: 5000,
        volumeTarget: 1000,
        orderTarget: 500000,
        refrigeratorTarget: 8000,
        integral: 80,
        icon: star,
      }
    case '王者':
      return {
        visitTarget: 5000,
        volumeTarget: 1000,
        orderTarget: 500000,
        refrigeratorTarget: 8000,
        integral: 100,
        icon: star,
      }
    default:
      return {
        visitTarget: 1,
        volumeTarget: 1,
        orderTarget: 1,
        refrigeratorTarget: 1,
        integral: 10,
        icon: bronze,
      }
  }
}

const dataTranslate = (data, tenantId) => {
  if (data) {
    const targets = nameToData(data.keyword);
    return {
      sale_amounts: data.sale_amounts,
      visit_times: data.visit_times,
      create_customers: data.create_customers,
      current_customers: data.current_customers,
      supports: data.supports,
      max_visit_name: data.max_visit_name,
      blogs: data.blogs,
      distances: data.distances,
      goAndbackDistances: round(data.distances/2000),
      attendance_times: data.attendance_times,
      join_days: data.join_days,
      id: data.id,
      used_days: data.used_days,
      check_rate: `${data.check_rate*100}%`,
      max_sale_amounts: data.max_sale_amounts,
      max_create_month: data.max_create_month,
      payment_amounts: data.payment_amounts,
      user_id: data.user_id,
      user_name: data.user_name,
      year: data.year,
      order_numbers: data.order_numbers,
      keyword: data.keyword,
      max_sale_month: data.max_sale_month,
      max_create_customers: data.max_create_customers,
      check_customer_times: data.check_customer_times,
      sale_rate: `${data.sale_rate}%`,
      shares: data.shares,
      check_asserts: data.check_asserts,
      sale_customers: data.sale_customers,
      comments: data.comments,
      visitTarget: targets.visitTarget,
      volumeTarget: targets.volumeTarget,
      orderTarget: targets.orderTarget,
      refrigeratorTarget: targets.refrigeratorTarget,
      integral: targets.integral,
      icon: targets.icon,
      visitPercent: toPercent(data.visit_times, targets.visitTarget),
      volumePercent: toPercent(data.sale_customers, targets.volumeTarget),
      orderPercent: toPercent(data.sale_amounts*10000, targets.orderTarget),
      isKSF: tenantId === '6180943480984829434' ? true : false ,
      refrigeratorPercent: toPercent(data.check_asserts, targets.refrigeratorTarget),
    }
  } else {
    return null;
  }
}

export default dataTranslate