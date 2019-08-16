class Base {
    constructor() {
        this.loadData();
        this.CountRecord();


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
     * Hàm thực hiện lấy toàn bộ dữ liệu
     * Người tạo: Hàn Trung Kiên 
     * Ngày tạo:  16/8/2019
     * */
    getAllData() {
        var fakeData = [];
        $.ajax({
            method: 'GET',
            url: '/khachhangs',
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
        var pageIndex = $('.page-index').val();
        var pageSize = $('.page-size option:selected').val();
        $('.page-index').attr("max", this.getAllData().length / pageSize+1);
        if (pageIndex == 1) {
            $('button#trang-dau').prop('disabled', true);
            $('button#trang-truoc').prop('disabled', true);



        } else {
            $('button#trang-dau').prop('disabled', false);
            $('button#trang-truoc').prop('disabled', false);

        }
        if (pageIndex > (this.getAllData().length / pageSize)) {
            $('.page-index').prop('disabled', true);
            $('button#trang-sau').prop('disabled', true);
            $('button#trang-cuoi').prop('disabled', true);


        } else {
            $('.page-index').prop('disabled', false);
            $('button#trang-sau').prop('disabled', false);
            $('button#trang-cuoi').prop('disabled', false);


        }
        $('button.duplicate').prop('disabled', true);
        $('button.delete').prop('disabled', true);
        $('button.edit').prop('disabled', true);


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
                    rowHTML.append('<td class = "uncheck cot-data" id = "checkbox"></td>');
                }
            });
            $('.main-table tbody').append(rowHTML);
        });
        this.CountRecord();


        //Hàm delay con quay loading:
        $("#con-quay").hide();

        





    }
    //Hàm load lại dữ liệu mới :
    loadTrangDau() {
        $('.page-index').val(1);
        $('.page-size').val(15);

        var pageIndex = $('.page-index').val();
        var pageSize = $('.page-size option:selected').val();
        if (pageIndex == 1) {
            $('button#trang-dau').prop('disabled', true);
            $('button#trang-truoc').prop('disabled', true);



        } else {
            $('button#trang-dau').prop('disabled', false);
            $('button#trang-truoc').prop('disabled', false);

        }
        if (pageIndex > (this.getAllData().length / pageSize)) {
            $('.page-index').prop('disabled', true);
            $('button#trang-sau').prop('disabled', true);
            $('button#trang-cuoi').prop('disabled', true);

        } else {
            $('.page-index').prop('disabled', false);
            $('button#trang-sau').prop('disabled', false);
            $('button#trang-cuoi').prop('disabled', false);


        }
        $('button.duplicate').prop('disabled', true);
        $('button.delete').prop('disabled', true);
        $('button.edit').prop('disabled', true);



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
        var fields = $('.main-table th[fieldName]');
        $('.main-table tbody').empty();
        $.each(fakeData, function (index, item) {
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
    //Hàm thực hiện việc load dữ liệu trang cuối cùng:

    loadTrangCuoi() {
       

        var pageIndex = $('.page-index').val();
        var pageSize = $('.page-size option:selected').val();
        $('.page-index').val(this.getAllData().length / pageSize + 1);

        if (pageIndex == 1) {
            $('button#trang-dau').prop('disabled', true);
            $('button#trang-truoc').prop('disabled', true);



        } else {
            $('button#trang-dau').prop('disabled', false);
            $('button#trang-truoc').prop('disabled', false);

        }
        if (pageIndex > (this.getAllData().length / pageSize)) {
            $('.page-index').prop('disabled', true);
            $('button#trang-sau').prop('disabled', true);
            $('button#trang-cuoi').prop('disabled', true);

        } else {
            $('.page-index').prop('disabled', false);
            $('button#trang-sau').prop('disabled', false);
            $('button#trang-cuoi').prop('disabled', false);


        }
        $('button.duplicate').prop('disabled', true);
        $('button.delete').prop('disabled', true);
        $('button.edit').prop('disabled', true);



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
        var fields = $('.main-table th[fieldName]');
        $('.main-table tbody').empty();
        $.each(fakeData, function (index, item) {
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
    //Hàm thực hiện việc quay lại một trang so với trang hiện tại:
    loadTrangTruoc() {
        $('.page-index').val($('.page-index').val()-1);
        

        var pageIndex = $('.page-index').val();
        var pageSize = $('.page-size option:selected').val();
        if (pageIndex == 1) {
            $('button#trang-dau').prop('disabled', true);
            $('button#trang-truoc').prop('disabled', true);



        } else {
            $('button#trang-dau').prop('disabled', false);
            $('button#trang-truoc').prop('disabled', false);

        }
        if (pageIndex > (this.getAllData().length / pageSize)) {
            $('.page-index').prop('disabled', true);
            $('button#trang-sau').prop('disabled', true);
            $('button#trang-cuoi').prop('disabled', true);

        } else {
            $('.page-index').prop('disabled', false);
            $('button#trang-sau').prop('disabled', false);
            $('button#trang-cuoi').prop('disabled', false);


        }
        $('button.duplicate').prop('disabled', true);
        $('button.delete').prop('disabled', true);
        $('button.edit').prop('disabled', true);



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
        var fields = $('.main-table th[fieldName]');
        $('.main-table tbody').empty();
        $.each(fakeData, function (index, item) {
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
    loadTrangSau() {
        

        $('.page-index').val($('.page-index').val()+1);


        var pageIndex = $('.page-index').val();
        var pageSize = $('.page-size option:selected').val();
        if (pageIndex == 1) {
            $('button#trang-dau').prop('disabled', true);
            $('button#trang-truoc').prop('disabled', true);



        } else {
            $('button#trang-dau').prop('disabled', false);
            $('button#trang-truoc').prop('disabled', false);

        }
        if (pageIndex > (this.getAllData().length / pageSize)) {
            $('.page-index').prop('disabled', true);
            $('button#trang-sau').prop('disabled', true);
            $('button#trang-cuoi').prop('disabled', true);

        } else {
            $('.page-index').prop('disabled', false);
            $('button#trang-sau').prop('disabled', false);
            $('button#trang-cuoi').prop('disabled', false);


        }
        $('button.duplicate').prop('disabled', true);
        $('button.delete').prop('disabled', true);
        $('button.edit').prop('disabled', true);



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
        var fields = $('.main-table th[fieldName]');
        $('.main-table tbody').empty();
        $.each(fakeData, function (index, item) {
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

    //Hàm thực hiện in ra câu hiện thị bao nhiêu bản ghi trong phần Trang:

    CountRecord() {
        var me = this;
        

        var a = ($('.page-index').val() - 1) * $('.page-size').val() + 1;
        var b = ($('.page-index').val() - 1) * $('.page-size').val() + $('.main-table tbody tr').length;
        var c = me.getAllData().length;



        $('.trang .dem-ban-ghi').text("Hiển thị " + a + " - " + b + " trên " + c + " kết quả");
    }





}