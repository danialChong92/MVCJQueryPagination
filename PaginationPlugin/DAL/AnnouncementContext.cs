using System;
using System.Data.Entity;
using PaginationPlugin.Models;

namespace PaginationPlugin.DAL
{
    public class AnnouncementContext : DbContext
    {
        public AnnouncementContext() : base("AnnouncementsConnectionString")
        {
        }

        public DbSet<Announcements> Announcement { get; set; }

    }
}