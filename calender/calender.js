let date = document.getElementById('date')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

const today = new Date();
const weakDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saterday'];
const Allmonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weakDays[today.getDay()]
month.innerHTML = Allmonth[today.getMonth()]
year.innerHTML = today.getFullYear()


