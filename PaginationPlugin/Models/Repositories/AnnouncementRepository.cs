using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PaginationPlugin.Models.Repositories
{
    public class AnnouncementRepository
    {
        private PaginationPluginDataAccessDataContext dbAccess = new PaginationPluginDataAccessDataContext();

        public IEnumerable<AnnouncementData> GetAnnouncementInfo(){
            return dbAccess.AnnouncementDatas.OrderByDescending(u => u.AnnouncementDate);
        }

    }
}