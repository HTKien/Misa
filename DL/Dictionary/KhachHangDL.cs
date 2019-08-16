using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace DL
{
    public class KhachHangDL
    {
        private NtierContext db = new NtierContext();
        
        //Hàm thực hiện lấy dữ liệu từ database về 
        //Người tạo: Hàn Trung Kiên
        //Ngày tạo: 11/8/2019
        public IEnumerable<KhachHang> GetKhachHang()
        {
            return db.KhachHangs;
        }



    }
}
