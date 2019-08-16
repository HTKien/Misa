using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using BL;
using DL;
using Entities;

namespace Ntier
{
    public class KhachHangsController : ApiController
    {
        private KhachHangDL _khachHangDL = new KhachHangDL();
        private KhachHangBL _khachHangBL = new KhachHangBL();


        //Service thực hiện lấy tất cả danh sách sinh vien 
        //Người tạo : Hàn Trung Kien 
        //Ngày tạo : 11/8/2019
        [Route("khachhangs")]
        [HttpGet]
        public async Task<IEnumerable<KhachHang>> GetAllKhachHang()
        {
            //delay con quay : sau khi load data được 1s: 
            await Task.Delay(1000);

            return _khachHangDL.GetKhachHang();


        }

        /// <summary>
        /// service thực hiện lấy bảng phiếu thu tùy vào trang và kích thước trang:
        /// Người tạo: Hàn Trung Kiên
        /// Ngày tạo: 11/8/2019
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>


        [Route("khachhangs/{pageIndex}/{pageSize}")]
        [HttpGet]
        public async Task<IEnumerable<KhachHang>> GetPagingKhachHang(int pageIndex, int pageSize)
        {
            await Task.Delay(1000);

            return _khachHangBL.GetPagingData(pageIndex, pageSize);


        }

        

       
    }
}