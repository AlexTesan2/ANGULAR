using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlumnosAPI10.Controllers
{
    public class AlumnoController : ApiController
    {
        public IEnumerable<Alumnos> Get() 
        {
            using (ColegioEntities colegio = new ColegioEntities())
            {
                return colegio.Alumnos.ToList();
            }
        }

        public Alumnos Get(int id)
        {
            using (ColegioEntities colegio = new ColegioEntities())
            {
                return colegio.Alumnos.Find(id);
            }
        }


        [AcceptVerbs("Get")]
        public Alumnos Get2(int id)
        {
            using (ColegioEntities colegio = new ColegioEntities())
            {
                return colegio.Alumnos.FirstOrDefault(a => a.cursoID == id);
            }
        }

        [AcceptVerbs("Get")]
        public IEnumerable<Alumnos> GetPorCurso(int id)
        {
            using (ColegioEntities colegio = new ColegioEntities())
            {
                return colegio.Alumnos.Where(a => a.cursoID == id).ToList();
            }
        }
    }


}
