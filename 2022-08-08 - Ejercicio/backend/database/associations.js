const models = require('./models')
// Associations definition
models.Cliente.hasMany(models.ClienteProducto, {foreignKey: 'clienteDni'})
models.ClienteProducto.belongsTo(models.Cliente, {foreignKey: 'clienteDni'})

models.Producto.hasMany(models.ClienteProducto, {foreignKey: 'productoId'})
models.ClienteProducto.belongsTo(models.Producto,{foreignKey: 'productoId'})

models.Proveedor.hasMany(models.Producto,{foreignKey: 'proveedorNif'})
models.Producto.belongsTo(models.Proveedor,{foreignKey: 'proveedorNif'})