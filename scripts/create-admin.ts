import prisma from '../app/lib/prisma';
import { hashPassword } from '../app/lib/auth/password';

async function createAdminUser() {
  try {
    // Verificar si ya existe un usuario admin
    const existingAdmin = await prisma.user.findFirst({
      where: { role: 'admin' }
    });

    if (existingAdmin) {
      console.log('Ya existe un usuario administrador.');
      console.log(`Email: ${existingAdmin.email}`);
      return;
    }

    // Datos del admin por defecto
    const adminData = {
      name: 'Administrador',
      email: 'admin@piramidesoft.com',
      password: 'admin123', // Cambiar en producción
      role: 'admin' as const
    };

    // Hashear contraseña
    const hashedPassword = await hashPassword(adminData.password);

    // Crear usuario admin
    const admin = await prisma.user.create({
      data: {
        name: adminData.name,
        email: adminData.email,
        password: hashedPassword,
        role: adminData.role
      }
    });

    console.log('Usuario administrador creado exitosamente:');
    console.log(`ID: ${admin.id}`);
    console.log(`Nombre: ${admin.name}`);
    console.log(`Email: ${admin.email}`);
    console.log(`Rol: ${admin.role}`);
    console.log('');
    console.log('IMPORTANTE: Cambia la contraseña por defecto después del primer login.');
    console.log('Contraseña temporal: admin123');

  } catch (error) {
    console.error('Error al crear usuario administrador:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
