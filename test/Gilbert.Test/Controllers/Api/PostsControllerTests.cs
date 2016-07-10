using Microsoft.AspNetCore.Mvc;
using Xunit;
using Gilbert.Web.Controllers.Api;

namespace Gilbert.Test.Controllers.Api
{
    public class PostsControllerTests
    {
        public PostsController Controller { get; }

        public PostsControllerTests()
        {
            Controller = new PostsController();
        }
    }
}
