using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlumnosAPI10.Controllers
{
    public class MascotaController : ApiController
    {
        public IEnumerable<Mascotas> Get()
        {
            using (ColegioEntities10 colegio = new ColegioEntities10())
            {
                return colegio.Mascotas.ToList();
            }
        }
    }
}
