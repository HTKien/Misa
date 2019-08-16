using DL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class KhachHangBL
    {
        private KhachHangDL _khachHangDL = new KhachHangDL();

        //Hàm thực hiện lấy dữ liệu phân trang theo số trang và kích thước trang: 
        public IEnumerable<KhachHang> GetPagingData(int _pageIndex, int _pageSize)
        {
            var _khachHangs = _khachHangDL.GetKhachHang();
            _khachHangs = _khachHangs.OrderBy(p => p.Ma)
            .Skip((_pageIndex - 1) * _pageSize)
            .Take(_pageSize);
            return _khachHangs;
            


        }
    }
}
