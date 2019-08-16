
/**
 * Hàm thực hiện định dạng lại ngày sinh theo kiểu : dd/MM/yyyy
 * Người tạo: Hàn Trung Kiên
 * Ngày tạo: 11/8/2019
 * */


Date.prototype.formatddMMyyyy = function () {
    var day = this.getDate() + "";
    if (day.length == 1) { day = "0" + day };
    var month = this.getMonth() + 1 + "";
    if (month.length == 1) { month = "0" + month };
    var year = this.getFullYear();
    return day + '/' + month + '/' + year;
}