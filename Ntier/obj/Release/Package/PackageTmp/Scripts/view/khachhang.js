$(document).ready(function () {
    var khachHang = new KhachHang();
    


})

class KhachHang extends Base {
    constructor() {
        super();
        this.InitEvents();


    }


    InitEvents() {
       // $('tr').mouseenter().addClass('mouseenter');
        $('tbody').on('click', 'tr', this.RowOnClick);
        //sự kiện hiện dialog ngày tháng:
        $("#datepicker").datepicker();
        
        //sự kiện thay đổi số trang thì load lại dữ liệu cho trang tương ứng :
        $(document).on('keyup', 'input.page-index', this.PagingData.bind(this));
        //sự kiện thay đổi kích thước trang thì phải load lại data luôn:
        $(document).on('change', '.page-size', this.loadData.bind(this));
        //sự kiện quay về trang đầu tiên:
        $(document).on('click', '#trang-dau', this.loadDataAgain.bind(this));








    }
    /**
     *Hàm thực hiện load lại dữ liệu khi chọn trang tương ứng
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 11/8/2019
     * */
    PagingData(event) {
        if (event.keyCode === 13) {
            $('.main-table tbody').empty();

            $("#con-quay").show();
            this.loadData();
            $("#con-quay").hide();



        }
    }
    /**
     * Hàm thực hiện rê chuột vào một bản ghi dữ liệu
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 11/8/2019
     * */
    Mouseenter() {
        $('.main-table tbody tr').removeClass('mouseenter');
        $(this).addClass('mouseenter');

    }

    /**
     * Hàm thực hiện việc click chuột vào một bản ghi dữ liệu
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 11/8/2019
     * */
    RowOnClick() {
        $('.main-table tbody tr').removeClass('select');
        $(this).addClass('select');
        $('button.delete').removeAttr('disabled');
        $('button.duplicate').removeAttr('disabled');
        $('button.edit').removeAttr('disabled');
    }
}

