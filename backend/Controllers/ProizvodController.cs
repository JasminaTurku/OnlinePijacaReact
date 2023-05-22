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

    public class ProizvodController : ControllerBase {

        private Context Context {get; set; }

        public ProizvodController(Context context){
            Context=context;
        }

        [Route("VratiPonuduProizvoda")]
        [HttpGet]

        public async Task<ActionResult> VratiPonuduProizvoda([FromQuery] int idPijace, [FromQuery] int idTipaProizvoda, [FromQuery] string nazivProizvoda){

            try{
                var tipProizvoda = await Context.TipProizvoda.FindAsync(idTipaProizvoda);

                var res= Context.Proizvod
                .Include(p => p.Pijaca)
                .Include(p => p.TipProizvoda)
                .Where(p => p.Pijaca.Id==idPijace);
                
                if(!tipProizvoda.Naziv.Equals("Sve"))
                    res = res.Where(p => p.TipProizvoda.Id==idTipaProizvoda);

                if(nazivProizvoda!=null){
                    res=res.Where(p => p.Naziv.Contains(nazivProizvoda));
                }
                
                var proizvodi= await res.Select(p => 
                new{
                    ID=p.Id,
                    Naziv=p.Naziv,
                    Cena=p.Cena,
                    Dostupan=p.Dostupan,
                    Putanja=p.Putanja,
                    IdTipaProizvoda = p.TipProizvoda.Id
                })
                .ToListAsync();

                return Ok(proizvodi);


            }
            catch(Exception e){
                return BadRequest(e.StackTrace);
            }
        }

        
        [Route("VratiProizvodePijace")]
        [HttpGet]

        public async Task<ActionResult> VratiProizvodePijace([FromQuery] int idPijace, [FromQuery] int idTipaProizvoda, [FromQuery] int? cenaOd, [FromQuery] int? cenaDo){

            if(idPijace<=0 || idTipaProizvoda<=0){
                return BadRequest("Nevalidan ID");
            }
            try{
                var tipProizvoda = await Context.TipProizvoda.FindAsync(idTipaProizvoda);
                
                var proizvodi= Context.Proizvod
                .Include(p => p.Pijaca)
                .Where(p=> p.Pijaca.Id==idPijace);

                if(!tipProizvoda.Naziv.Equals("Sve"))
                    proizvodi = proizvodi
                                .Include(p => p.TipProizvoda)
                                .Where(p=> p.TipProizvoda.Id==idTipaProizvoda);

                if(cenaOd!=null)
                    proizvodi=proizvodi.Where(p => p.Cena >=cenaOd);

                if(cenaDo!=null)
                    proizvodi=proizvodi.Where(p => p.Cena <=cenaDo);

                var pom = await  proizvodi.Select(p => 
                new {
                    ID=p.Id,
                    Naziv=p.Naziv,
                    Cena=p.Cena,
                    Dostupan=p.Dostupan,
                    Putanja=p.Putanja,
                    IdTipaProizvoda = p.TipProizvoda.Id

                }).ToListAsync();

                return Ok(pom);
                
            }
            catch(Exception e){
                return BadRequest(e.Message);
            }
        }
    }
}