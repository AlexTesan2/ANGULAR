using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ExamenApi.Controllers
{
    public class VehiculoController : ApiController
    {
        public IEnumerable<Vehiculos> Get()
        {
            using (DBExamenAngularEntitiesVehiculo DB = new DBExamenAngularEntitiesVehiculo())
            {
                return DB.Vehiculos.ToList();
            }
        }

        public Vehiculos Get(int id)
        {
            using (DBExamenAngularEntitiesVehiculo DB = new DBExamenAngularEntitiesVehiculo())
            {
                return DB.Vehiculos.Find(id);
            }
        }

        [AcceptVerbs("Get")]
        public IEnumerable<Vehiculos> GetPorSerie(int id)
        {
            using (DBExamenAngularEntitiesVehiculo DB = new DBExamenAngularEntitiesVehiculo())
            {
                return DB.Vehiculos.Where(a => a.serieId == id).ToList();
            }
        }
    }
}
