using Microsoft.EntityFrameworkCore.Migrations;

namespace MoviesAPI.Migrations
{
    public partial class Actorrole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            Insert into AspNetRoles (Id, [name], [NormalizedName])
            values ('4a6755e9-18cd-4fc2-a183-28f155e6dfe0', 'Actor', 'Actor')
            ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"delete AspNetRoles
            add where id = '4a6755e9-18cd-4fc2-a183-28f155e6dfe0'");
        }
    }
}
