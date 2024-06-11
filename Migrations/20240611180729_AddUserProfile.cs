using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourtTime_Capstone.Migrations
{
    /// <inheritdoc />
    public partial class AddUserProfile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1cc09606-0b07-4c37-9939-f5ff9e8aaaf9", "AQAAAAIAAYagAAAAEHanFbbpwhKMvnBmYsYerAycb5ZAsb368aKzLbCushOYbHYCuhyJNFsqNlK/OMJiYw==", "e13bcafb-7ed3-4835-a7dc-5c3f51da2130" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "6ab1eebf-eba8-4aa2-b079-303451d391a0", "AQAAAAIAAYagAAAAELguwh5SXRZ9ldCmK3cKhkhNhamLu7EpIOjTk3cp1f9W/wAJ9LE0bW0T2O0T5nzmHQ==", "f3b85032-4eb1-49a1-bfeb-8a50f264a516" });
        }
    }
}
