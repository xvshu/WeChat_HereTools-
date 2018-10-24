const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const roa = (arr,count) =>{
  var temp=new Array();    //temp存放生成的随机数
    for (var i=0;i<count;i++)
    { 
        var num=Math.floor(Math.random()*arr.length); //生成随机数num
        temp.push(arr[num]);    //获取arr[num]并放入temp
        arr.splice(num,1);    
    }
    return temp;
}
module.exports = {
  formatTime: formatTime,
  roa:  roa
}
