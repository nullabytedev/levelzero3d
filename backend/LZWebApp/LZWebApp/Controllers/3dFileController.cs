using LZWebApp.DTO;
using LZWebApp.Models;
using LZWebApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace LZWebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class _3dFileController(I3dFileService service) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<_3dFileDTO>>> Get3dFiles()
            => Ok(await service.GetAll3dFilesAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult<_3dFileDTO>> GrabOneFile(int id)
        {
            var _3dfile = await service.Get3dFileByIdAsync(id);
            if (_3dfile == null) {return NotFound("The requested model was not found...");}
            return Ok(_3dfile);
        }
    }
}
