using LZWebApp.Data;
using LZWebApp.DTO;
using LZWebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace LZWebApp.Services
{
    public class _3dFileService(_3dFileContext context) : I3dFileService
    {
        public async Task<_3dFileDTO> Add3dFileAsync(_3dFile _3dfile)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete3dFileAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<_3dFileDTO?> Get3dFileByIdAsync(int id)
        {
            var result = await context._3dFiles
                .Where(f => f.Id == id)
                .Select(f => new _3dFileDTO
                {
                    Name = f.Name,
                    Description = f.Description,
                    Tags = f.Tags,
                    Url = f.Url
                })
                .FirstOrDefaultAsync();
            return result;
        }

        public async Task<List<_3dFileDTO>> GetAll3dFilesAsync()
            => await context._3dFiles.Select(f => new _3dFileDTO
            {
                Name = f.Name,
                Description = f.Description,
                Tags = f.Tags,
                Url = f.Url
            }).ToListAsync();

        public Task<bool> Update3dFileAsync(int id, _3dFile _3dfile)
        {
            throw new NotImplementedException();
        }
    }
}
