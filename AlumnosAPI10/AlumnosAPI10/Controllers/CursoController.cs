using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace AlumnosAPI10.Controllers
{
    public class CursoController : ApiController
    {
        public IEnumerable<Cursos> Get()
        {
            using (ColegioEntities9 colegio = new ColegioEntities9())
            {
                return colegio.Cursos.ToList();
            }
        }

        public Cursos Get(int id)
        {
            using (ColegioEntities9 colegio = new ColegioEntities9())
            {
                return colegio.Cursos.Find(id);
            }
        }


    }
}