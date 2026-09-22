using LZWebApp.DTO;
using LZWebApp.Models;

namespace LZWebApp.Services
{
    public interface I3dFileService
    {
        Task<List<_3dFileDTO>> GetAll3dFilesAsync();
        Task<_3dFileDTO?> Get3dFileByIdAsync(int id);
        Task<_3dFileDTO> Add3dFileAsync(_3dFile _3dfile);
        Task<bool> Update3dFileAsync(int id, _3dFile _3dfile);
        Task<bool> Delete3dFileAsync(int id);
    }
}
