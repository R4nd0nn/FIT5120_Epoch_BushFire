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