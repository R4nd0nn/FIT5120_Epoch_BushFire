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
            var from = new EmailAddress("ma28fit5120@gmail.com","MA28Epoch");
            var to = new EmailAddress(toEmail);
            var plainTextContent = contents;
            var htmlContent = "<p>" + contents + "</p>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg);
        }

    }
}