using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PaginationPlugin.Models.Repositories;
using PaginationPlugin.Models;
using System.Collections;
using PaginationPlugin.DAL;

namespace PaginationPlugin.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        //https://www.asp.net/mvc/overview/getting-started/getting-started-with-ef-using-mvc/creating-an-entity-framework-data-model-for-an-asp-net-mvc-application
        private AnnouncementContext announcements = new AnnouncementContext();

        private AnnouncementRepository announcementDataAccess = new AnnouncementRepository();

        public ActionResult Index()
        {
            IEnumerable<AnnouncementData> getAnnouncement = announcementDataAccess.GetAnnouncementInfo();
            return View(getAnnouncement);
        }

        public JsonResult GetAnnouncement()
        {
            IEnumerable<AnnouncementData> getAnnouncement = announcementDataAccess.GetAnnouncementInfo();
            return Json(announcements);
        }

    }
}
