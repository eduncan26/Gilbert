using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Gilbert.Web.Models
{
    public class PostContext : DbContext
    {
        public PostContext(DbContextOptions<PostContext> opts) : base(opts) { }
    }

    public class Post
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
