using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace test.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            ViewBag.Head = "Introduction";
            ViewBag.Message = "";
            return View();
        }

        public ActionResult Map()
        {
            return View();
        }
    }
}