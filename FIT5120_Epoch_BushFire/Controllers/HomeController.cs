using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIT5120_Epoch_BushFire.Models;


namespace test.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {

            return View();
        }

        public ActionResult Map()
        {
            return View();
        }
    }
}