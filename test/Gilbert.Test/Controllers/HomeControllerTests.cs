using Microsoft.AspNetCore.Mvc;
using Xunit;
using Gilbert.Web.Controllers;

namespace Gilbert.Test.Controllers
{
    public class HomeControllerTests
    {
        public HomeController Controller { get; }

        public HomeControllerTests()
        {
            Controller = new HomeController();
        }

        [Fact]
        public void TestIndexView()
        {
            var result = Controller.Index() as ViewResult;
            Assert.NotNull(result.ViewData);
            Assert.IsType<ViewResult>(result);
        }

        [Fact]
        public void TestErrorView()
        {
            var result = Controller.Error() as ViewResult;
            Assert.NotNull(result.ViewData);
            Assert.IsType<ViewResult>(result);
        }
    }
}
