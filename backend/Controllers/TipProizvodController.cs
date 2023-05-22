using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace ONLINEPIJACA.Controllers {

    [ApiController]
    [Route("[controller]")]

    public class TipProizvodController : ControllerBase {

        private Context Context {get; set; }

        public TipProizvodController(Context context){
            Context=context;
        }

        [Route("VratiTipoveProizvoda/idPijace")]
        [HttpGet]
        public async Task<ActionResult> VratiTipoveProizvoda(int idPijace){

            if(idPijace<=0)
                return BadRequest("Pogresan ID");
            try{

                var tipovi=await Context.PijacaTipProizvoda
                .Include(p => p.Pijaca)
                .Include(p=>p.TipProizvoda)
                .Where(p=> p.Pijaca.Id==idPijace)
                .Select( p => new {
                    p.TipProizvoda.Id,
                    p.TipProizvoda.Naziv
                }).ToListAsync();

                return Ok(tipovi);

            }
            catch(Exception e){
                return  BadRequest(e.Message);
            }
        }
    }
}