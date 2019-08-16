using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class KhachHang
    {
        public Guid ID { get; set; }
        public string Ma { get; set; }
        public string Ten { get; set; }
        public string DienThoai { get; set; }
        public DateTime NgaySinh { get; set; }
        public string Nhom { get; set;  }
        public string GhiChu { get; set;  }
        public string TrangThai { get; set; }
             
    }
}
