namespace Entities.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.KhachHangs",
                c => new
                    {
                        ID = c.Guid(nullable: false,defaultValueSql: "newid()"),
                        Ma = c.String(nullable: false),
                        Ten = c.String(nullable: false),
                        DienThoai = c.String(nullable: false),
                        NgaySinh = c.DateTime(nullable: false,defaultValueSql:"getdate()"),
                        Nhom = c.String(nullable: false),
                        GhiChu = c.String(nullable: false),
                        TrangThai = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.KhachHangs");
        }
    }
}
