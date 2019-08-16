class Base {
    constructor() {
        this.loadData();

    }



    /**
     * Hàm  thực hiện lấy dữ liệu từ database gán vào một mảng
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 11/8/2019
     * */
    getData() {
        var pageIndex = $('.page-index').val();
        var pageSize = $('.page-size option:selected').val();



        var fakeData = [];
        $.ajax({
            method: 'GET',
            url: '/khachhangs/' + pageIndex + '/' + pageSize,
            dataType: 'json',
            async: false,
            success: function (res) {
                fakeData = res;
            },
            error: function (res) {
                alert("Hệ thống đang bị lỗi!");
            }
        })
        return fakeData;


    }

    /**
     * Hàm thực hiện load dữ liệu lên html
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 11/8/2019
     * */
    loadData() {
        $("#con-quay").show();

        var me = this;
        var data = me.getData();

        //THÊM KIÊU ĐƠN THUẦN HƠN:
        //$.each(data, function (index, item) {
        //    var rowHTML = '<tr>'
        //        + '<td class = "uncheck cot1 cot-data"> </td>'
        //        + '<td class = "cot2 cot-data" >' + item.Ma + ' </td>'
        //        + '<td class = "cot3 cot-data" >' + item.Ten + ' </td>'
        //        + '<td class = "cot4 cot-data" >' + item.DienThoai + ' </td>'
        //        + '<td class = "cot5 cot-data" >' + item.NgaySinh + ' </td>'
        //        + '<td class = "cot6 cot-data" >' + item.Nhom + ' </td>'
        //        + '<td class = "cot7 cot-data" >' + item.GhiChu + ' </td>'
        //        + '<td class = "cot8 cot-data" >' + item.TrangThai + ' </td>'
        //        + '</tr > ';
        //    $('.main-table tbody').append(rowHTML);
        //});


        //CÁCH THÊM THAY CHO CÁCH COMMENT Ở TRÊN: 
        var fields = $('.main-table th[fieldName]');
        $('.main-table tbody').empty();
        $.each(data, function (index, item) {
            var rowHTML = $('<tr recordid ="' + item["ID"] + '"></tr>');
            $.each(fields, function (fieldIndex, fieldItem) {
                var fieldName = fieldItem.getAttribute('fieldName');
                var fieldValue = item[fieldName];
                var cls = 'text-left';
                if (fieldName == "NgaySinh") {
                    fieldValue = new Date(fieldValue);
                }
                var type = $.type(fieldValue);
                switch (type) {
                    case "number":
                        cls = 'text-right';
                        break;
                    case "date":
                        fieldValue = fieldValue.formatddMMyyyy();
                        cls = 'text-center';
                        break;
                }
                if (fieldName) {
                    rowHTML.append('<td class = "cot-data">' + fieldValue + '</td>');
                } else {
                    rowHTML.append('<td class = "uncheck cot-data"></td>');
                }
            });
            $('.main-table tbody').append(rowHTML);
        });
        //Hàm delay con quay loading:
        $("#con-quay").hide();

        





    }
    //Hàm load lại dữ liệu mới :
    loadDataAgain() {
        var fakeDataAgain = [];
        $.ajax({
            method: 'GET',
            url: '/khachhangs/1/15',
            dataType: 'json',
            async: false,
            success: function (res) {
                fakeDataAgain = res;
                debugger

            },
            error: function (res) {
                alert("Hệ thống đang bị lỗi!");
            }
        });
        var fields = $('.main-table th[fieldName]');
        $('.main-table tbody').empty();
        $.each(fakeDataAgain, function (index, item) {
            var rowHTML = $('<tr recordid ="' + item["ID"] + '"></tr>');
            $.each(fields, function (fieldIndex, fieldItem) {
                var fieldName = fieldItem.getAttribute('fieldName');
                var fieldValue = item[fieldName];
                var cls = 'text-left';
                if (fieldName == "NgaySinh") {
                    fieldValue = new Date(fieldValue);
                }
                var type = $.type(fieldValue);
                switch (type) {
                    case "number":
                        cls = 'text-right';
                        break;
                    case "date":
                        fieldValue = fieldValue.formatddMMyyyy();
                        cls = 'text-center';
                        break;
                }
                if (fieldName) {
                    rowHTML.append('<td class = "cot-data">' + fieldValue + '</td>');
                } else {
                    rowHTML.append('<td class = "uncheck cot-data"></td>');
                }
            });
            $('.main-table tbody').append(rowHTML);
        });
        //Hàm delay con quay loading:
        $("#con-quay").hide();


    }




}