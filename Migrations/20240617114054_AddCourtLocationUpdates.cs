using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourtTime_Capstone.Migrations
{
    /// <inheritdoc />
    public partial class AddCourtLocationUpdates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Skill",
                table: "UserProfiles",
                type: "double precision",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double precision");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "d21b5d29-0488-4023-af8f-17b9cf9183e6", "AQAAAAIAAYagAAAAEM7jthdc8FkE0/GUvPHrMOvJewGO51+fZhnBoK3Za8M9mOII8I2iQY2IfRqbV2+eqg==", "b05049f7-00cc-413a-b154-ea47527e2110" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tennis_courts_at_Centennial_Sportsplex.jpg/1200px-Tennis_courts_at_Centennial_Sportsplex.jpg");

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "456 Riverside Dr, Nashville, TN", "https://www.wkrn.com/wp-content/uploads/sites/73/2022/08/Spring-Hill-tennis-development.jpg?w=900", "East Nashville Tennis Club" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "789 West End Ave, Nashville, TN", "https://www.sayvilleschools.org/cms/lib/NY02205481/Centricity/ModuleInstance/36413/large/mstc2.jpg?rnd=0.124836626986431", "West End Tennis Center" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1011 Belmont Blvd, Nashville, TN", "https://images.squarespace-cdn.com/content/v1/5da5ec373a95ae6d8896a01e/1674655479911-XKCFOXJXBZH8RT4H5WXA/DJI_0587.JPG", "Belmont Tennis Courts" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1213 Vanderbilt Pl, Nashville, TN", "https://lipscombsports.com/images/2020/5/26/TennisComplex1.jpg?preset=large.socialmediaimage", "Vanderbilt Tennis Academy" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1415 Oak St, Brentwood, TN", "https://d2114hmso7dut1.cloudfront.net/customers/b4646402-ea8d-11ed-bec3-0614187498c1/sites/b470533e-ea8d-11ed-a9ae-0614187498c1/files/9b5c0730-eb64-11ed-9d8e-a59b9fd26edf/_thumbnails/1280.webp?t=1683305290&original_extension=png", "Brentwood Tennis Club" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 7,
                column: "Image",
                value: "https://d1ja9tyo8nbkbc.cloudfront.net/50513653_S0035/S0035/S0035-R0100/RTC2637758/660c142006ad0445e3b02e70.jpg?version=1712068686&width=640");

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1819 Hillsboro Rd, Nashville, TN", "https://www.novasports.com/wp-content/uploads/UT3-Copy-4-1024x768.jpg", "Green Hills Tennis Courts" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "2021 Harding Pike, Nashville, TN", "https://cdn.synthetic-turf.com/uploads/2013/11/22064524/Tennis-court11.jpg", "Belle Meade Tennis Courts" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "2223 Lebanon Pike, Nashville, TN", "https://assets.simpleviewinc.com/simpleview/image/upload/crm/napavalley/SilveradoResortandSpa_KT-208_34CEA051-F9D8-4657-BA66AB13B30AB737_436c29dd-fbb8-4ad4-b21be972570ea72f.jpg", "Hermitage Tennis Club" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 11,
                column: "Image",
                value: "https://www.campwidji.org/sites/campwidji/files/2020-02/tennis-yo-730.jpg");

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "Address", "Image" },
                values: new object[] { "2627 Germantown Rd, Nashville, TN", "https://transform.octanecdn.com/width/1600/https://octanecdn.com/turftekusacom/turftekusacom_610595326.jpg" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Skill",
                table: "UserProfiles",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "double precision",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1cc09606-0b07-4c37-9939-f5ff9e8aaaf9", "AQAAAAIAAYagAAAAEHanFbbpwhKMvnBmYsYerAycb5ZAsb368aKzLbCushOYbHYCuhyJNFsqNlK/OMJiYw==", "e13bcafb-7ed3-4835-a7dc-5c3f51da2130" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "nashville_central.jpg");

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "456 Riverside Dr, Memphis, TN", "memphis_riverside.jpg", "Memphis Riverside Tennis Club" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "789 Volunteer Blvd, Knoxville, TN", "knoxville_center.jpg", "Knoxville Tennis Center" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1011 Valley Rd, Chattanooga, TN", "chattanooga_valley.jpg", "Chattanooga Valley Tennis Courts" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1213 Academy St, Clarksville, TN", "clarksville_academy.jpg", "Clarksville Tennis Academy" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1415 Oak St, Murfreesboro, TN", "murfreesboro_club.jpg", "Murfreesboro Tennis Club" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 7,
                column: "Image",
                value: "franklin_community.jpg");

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "1819 Court St, Jackson, TN", "jackson_city.jpg", "Jackson City Tennis" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "2021 University Pkwy, Johnson City, TN", "johnson_city.jpg", "Johnson City Tennis Courts" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "Address", "Image", "Name" },
                values: new object[] { "2223 Elm St, Bartlett, TN", "bartlett_club.jpg", "Bartlett Tennis Club" });

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 11,
                column: "Image",
                value: "hendersonville_heights.jpg");

            migrationBuilder.UpdateData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "Address", "Image" },
                values: new object[] { "2627 Germantown Rd, Germantown, TN", "germantown_stadium.jpg" });
        }
    }
}
