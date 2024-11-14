import moment from 'moment';

/**
 * 获取上周的周一和周日日期
 *
 * @param inputDate string - 输入的日期字符串，格式需符合 moment.js 的解析要求
 * @returns object - 包含上周周一和周日日期的对象
 */
function getLastWeekMondayAndSunday(inputDate) {
  // 使用 moment 来解析传入的时间
  const date = moment(inputDate);

  // 获取上周的周一
  // 首先减去一周，然后设置为那周的周一
  const lastWeekMonday = date.clone().subtract(8, 'days').startOf('week').add(1, 'days');

  // 获取上周的周日
  // 在周一的基础上加上6天，得到周日
  const lastWeekSunday = lastWeekMonday.clone().add(6, 'days');

  // 返回结果
  return {
    lastWeekMonday: lastWeekMonday.format('MM.DD'), // 可以根据需要格式化日期
    lastWeekSunday: lastWeekSunday.format('MM.DD') // 可以根据需要格式化日期
  };
}
export default function momentExample() {
  return {
    getLastWeekMondayAndSunday
  };
}
