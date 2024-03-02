using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ExamenApi;

namespace ExamenApi.Controllers
{
    public class SerieController : ApiController
    {
        public IEnumerable<Series> Get()
        {
            using (DBExamenAngularEntitiesSeries DB = new DBExamenAngularEntitiesSeries())
            {
                return DB.Series.ToList();
            }
        }

        public Series Get(int id)
        {
            using (DBExamenAngularEntitiesSeries DB = new DBExamenAngularEntitiesSeries())
            {
                return DB.Series.Find(id);
            }
        }

    }
}
