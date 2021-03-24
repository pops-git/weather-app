export const UtsConverter = (uts) => {
    var a = new Date(uts * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();

    if(min < 10){
        min = '0' + min
    }

    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}