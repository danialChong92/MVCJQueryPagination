using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PaginationPlugin.Models
{
    public class Announcements
    {
        public int AnnouncementID { get; set; }
        public DateTime AnnouncementDate { get; set; }
        public string AnnouncementContent { get; set; }
    }
}