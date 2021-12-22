import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')
const Day = {
  getToDate (value, format, locale) {
    let _format = 'YYYY-MM-DD'
    let _locale = 'ko'
    if (format) _format = format
    if (locale) _locale = locale
    return dayjs(value).locale(_locale).format(_format)
  }
}

Vue.prototype.Day = Day
