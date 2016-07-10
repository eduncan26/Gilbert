using Xunit;
using Gilbert.Web.Models;

namespace Gilbert.Test.Models
{
    public class PostTests
    {
        public Post Model { get; }

        public PostTests()
        {
            Model = new Post();
        }

        [Fact]
        public void TestPostProperties()
        {
            Assert.IsType<Post>(Model);
        }
    }
}
