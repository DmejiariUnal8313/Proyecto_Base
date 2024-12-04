import sequelize from '../../config/database';
import Pizza from '../../models/Pizza';
import Bebida from '../../models/Bebida';
import Factura from '../../models/Factura';
import Pedido from '../../models/Pedido';

export default async function handler(req, res) {
  try {
    await sequelize.sync({ force: true }); // Esto recreará las tablas cada vez que se ejecute
    res.status(200).json({ message: 'Base de datos sincronizada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

