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
        $(document).on('click', '#trang-dau', this.loadTrangDau.bind(this));

        //sự kiện tick vào checkbox của một hàng đơn thì xử lý sự kiện:
        $('tbody').on('click', 'td:first-of-type', this.TdTick);

        //sự kiện cho nút refresh ở phần trang:
        $(document).on('click', '#refresh', this.loadData.bind(this));

        //sự kiện cho nút quay lại trang trước:
        $(document).on('click', '#trang-truoc', this.loadTrangTruoc.bind(this));

        //sự kiện cho nút load trang sau:
        $(document).on('click', '#trang-sau', this.loadTrangSau.bind(this));

        //sự kiện cho nút load trang cuối: 
        $(document).on('click', '#trang-cuoi', this.loadTrangCuoi.bind(this));














    }
   
    /**
     *Hàm thực hiện load lại dữ liệu khi chọn trang tương ứng
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 11/8/2019
     * */
    PagingData(event) {
        if (event.keyCode === 13) {
            $('.main-table tbody').empty();

            this.loadData();



        }
        this.CountRecord();


    }
    /**
     *Hàm thực hiện việc click vào một hàng có checkbox là check thì đổi thành uncheck, ngược lại
     * Người tạo: Hàn Trung Kiên
     * Ngày tạo: 16/8/2019
     * */
    TdTick() {
        
        
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

