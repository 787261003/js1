const year = prompt('请输入年份')
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('你输入的年份是润年')
} else {
    alert('你输入的是平年')
}