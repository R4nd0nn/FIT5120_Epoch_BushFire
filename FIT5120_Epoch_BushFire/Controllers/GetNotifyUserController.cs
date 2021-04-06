using FIT5120_Epoch_BushFire.SendEmail;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIT5120_Epoch_BushFire.Models;


namespace FIT5120_Epoch_BushFire.Controllers
{
    public class GetNotifyUserController : Controller
    {
        // GET: GetNotifyUser
        private Azure_NotifyUser_MD db = new Azure_NotifyUser_MD();
        public ActionResult Home()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Update(string fname, string lname, string adress, string eadress)
        {
            GetNotifyUserSet getNotifyUser = new GetNotifyUserSet();
            getNotifyUser.FirstName = fname;
            getNotifyUser.LastName = lname;
            getNotifyUser.Address = adress;
            getNotifyUser.EmailAddress =eadress;
            try
            {
                if (ModelState.IsValid)
                {
                    db.Entry(getNotifyUser).State = EntityState.Modified;
                    db.GetNotifyUserSet.Add(getNotifyUser);
                    db.SaveChanges();
                    String toEmail = eadress;
                    String subject = "FIT5120MA28Team";
                    String guideline_url = "https://agriculture.vic.gov.au/farm-management/emergency-management/bushfires";
                    String safety_tips_url = "https://www.wikihow.com/Prepare-for-a-Forest-Fire";
                    String home_url = "https://fit5120ma28.ml/";
                    String contents = "Dear " + fname + "<br>" +
                         " Thanks for registering on our website. We will send you notification for Bushfire <br>" +
                         "For you location : " + adress + " check Fire Danger Rating here  <br>" +
                         "<a href=" + home_url + "> fire danger rating </a>" +
                         "<br><br> For guidelines to protect your farms please click on the following link <br>" +
                         "<a href=" + guideline_url + "> bushfire management </a>" +
                         "<br> To check steps to keep your properties safe during bushfire click on the following link <br>" +
                         "<a href=" + safety_tips_url + "> safety tips </a>";
                    Email es = new Email();
                    es.Send(toEmail, subject, contents);
                }  
            }
            catch (DbEntityValidationException ex)
            {
                foreach (var errors in ex.EntityValidationErrors)
                {
                    foreach (var validationError in errors.ValidationErrors)
                    {
                        // get the error message 
                        string errorMessage = validationError.ErrorMessage;
                    }
                }
            }
            return RedirectToAction("Home", "Home"); 
        }


    }
    }
