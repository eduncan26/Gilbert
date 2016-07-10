using System;

namespace Gilbert.Web.Models
{
    public class Comment
    {
        public int ID { get; set; }
        public User User { get; set; }
        public string Body { get; set; }
    }
}
