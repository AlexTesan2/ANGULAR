using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ExamenApi.Controllers
{
    public class ProductoController : ApiController
    {
        public IEnumerable <productos> Get()
        {
            using (DBExamenAngularEntities DB = new DBExamenAngularEntities())
            { 
                return DB.productos.ToList();
            }
        }

        public productos Get(int id)
        {
            using (DBExamenAngularEntities DB = new DBExamenAngularEntities())
            {
                return DB.productos.Find(id);
            }
        }
    }
}
