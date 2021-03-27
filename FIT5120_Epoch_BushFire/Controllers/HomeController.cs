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
        private GetNotifyUser_MDContainer db = new GetNotifyUser_MDContainer();
        public ActionResult Home()
        {

            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Update(string Firstname, string Lastname, string Address, string EmailAddress)
        {
            GetNotifyUser getnotifyuser = new GetNotifyUser();
            getnotifyuser.FirstName = Firstname;
            getnotifyuser.LastName = Lastname;
            getnotifyuser.Address = Address;
            getnotifyuser.EmailAddress = EmailAddress;
                if (ModelState.IsValid)
                {
                    db.GetNotifyUserSet.Add(getnotifyuser);
                    db.SaveChanges();
                }
            return View();

        }
        public ActionResult Map()
        {
            return View();
        }
    }
}