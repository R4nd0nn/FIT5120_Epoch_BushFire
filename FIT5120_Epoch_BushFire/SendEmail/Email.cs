using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;

namespace FIT5120_Epoch_BushFire.SendEmail
{
    public class Email
    {
        // Please use your API KEY here.
        private const String API_KEY = "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";

        public void Send(String toEmail, String subject, String contents)
        {
            var client = new SendGridClient(API_KEY);
            var from = new EmailAddress("fit5120ma28@gmail.com","MA28Epoch");
            var to = new EmailAddress(toEmail);
            var plainTextContent = contents;
            var htmlContent = "<p>" + contents + "</p>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg);
        }

    }
}