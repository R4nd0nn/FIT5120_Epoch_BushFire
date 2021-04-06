namespace FIT5120_Epoch_BushFire.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Azure_NotifyUser_MD : DbContext
    {
        public Azure_NotifyUser_MD()
            : base("name=Azure_NotifyUser_MD")
        {
        }

        public virtual DbSet<GetNotifyUserSet> GetNotifyUserSet { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
