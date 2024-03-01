using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace AlumnosAPI10.Controllers
{
    public class ProfesorController : ApiController
    {
        public IEnumerable<Profesores> Get()
        {
            using (ColegioEntities4 colegio = new ColegioEntities4())
            {
                return colegio.Profesores.ToList();
            }
        }

        public Profesores Get(int id)
        {
            using (ColegioEntities4 colegio = new ColegioEntities4())
            {
                return colegio.Profesores.Find(id);
            }
        }

    }
}
