using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIT5120_Epoch_BushFire.Models;

namespace FIT5120_Epoch_BushFire.Controllers
{
    public class IndicatorController : Controller
    {
        private Fire_forecastContainer db = new Fire_forecastContainer();
        // GET: Indicator
        public ActionResult Getdata()
        {
            FireForecast fireforecast = new FireForecast();
            string year = System.DateTime.Now.Year.ToString();
            string month = System.DateTime.Now.Month.ToString();
            string day = System.DateTime.Now.Day.ToString();
            string dbyear = fireforecast.Date.Year.ToString();
            string dbmonth = fireforecast.Date.Month.ToString();
            string dbday = fireforecast.Date.Day.ToString();
            if (year == dbyear && month ==dbmonth && day==dbday)
            {
                ViewBag.message = fireforecast.Rating;
            }
            return RedirectToAction("Home", "Home");
        }
    }
}