# Proyecto de Suministros de Limpieza

El proyecto busca crear una aplicación para gestionar ventas en una tienda de suministros de limpieza. La herramienta permitirá a cada empleado registrar sus ventas de forma individual y asegurará un acceso seguro con credenciales.

El proyecto se compone de los siguientes modelos:

### Esquema de Empleado

-nombre:
-Tipo: `String` (requerido). Almacena el nombre del empleado.

-email:
-Tipo: `String` (requerido y único). Almacena la dirección de correo electrónico del empleado.

-contraseña:
-Tipo: `String` (requerido). Almacena la contraseña del empleado para autenticación.

### Esquema de Venta

-empleadoId:
-Tipo: `ObjectId` (requerido). Referencia al empleado que realizó la venta.

-fecha:
-Tipo: `Date`. Almacena la fecha de la venta, con valor predeterminado de la fecha actual.

-monto:
-Tipo: `Number` (requerido). Almacena el monto de la venta.

-producto:
-Tipo: `String` (requerido). Almacena el nombre del producto vendido.

Relaciones:

Empleado: Contendrá la información de los empleados, incluyendo sus credenciales para autenticación.
Venta: Registrará las ventas realizadas por cada empleado.

Justificación:

Elegi relaciones referenciadas para que los datos de ventas no se repitan en cada documento de empleado y porque permite que un empleado pueda tener múltiples ventas.
