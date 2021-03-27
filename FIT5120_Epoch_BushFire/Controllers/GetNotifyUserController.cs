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
        private GetNotifyUser_MDContainer db = new GetNotifyUser_MDContainer();
        public ActionResult UpdateUser()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Update(string fname, string lname, string adress, string eadress)
        {

            GetNotifyUser getNotifyUser = new GetNotifyUser();
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
            return View();
        }
        }
    }
