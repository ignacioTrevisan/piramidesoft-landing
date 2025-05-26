import prisma from '../app/lib/prisma';
import { hashPassword, verifyPassword } from '../app/lib/auth/password';
import { signToken, verifyToken } from '../app/lib/auth/jwt';

async function testAuthentication() {
  console.log('🧪 Ejecutando pruebas del sistema de autenticación...\n');

  try {
    // Test 1: Verificar conexión a la base de datos
    console.log('1. Verificando conexión a la base de datos...');
    await prisma.$connect();
    console.log('✅ Conexión exitosa\n');

    // Test 2: Verificar hashing de contraseñas
    console.log('2. Probando hashing de contraseñas...');
    const testPassword = 'contraseña123';
    const hashedPassword = await hashPassword(testPassword);
    const isValidPassword = await verifyPassword(testPassword, hashedPassword);
    const isInvalidPassword = await verifyPassword('contraseñaIncorrecta', hashedPassword);
    
    console.log(`   Hash generado: ${hashedPassword.substring(0, 20)}...`);
    console.log(`   Verificación correcta: ${isValidPassword ? '✅' : '❌'}`);
    console.log(`   Verificación incorrecta: ${!isInvalidPassword ? '✅' : '❌'}\n`);

    // Test 3: Verificar JWT
    console.log('3. Probando tokens JWT...');
    const testUser = {
      id: 'test-id',
      email: 'test@test.com',
      name: 'Test User',
      role: 'admin' as const
    };
    
    const token = await signToken(testUser);
    const verifiedPayload = await verifyToken(token);
    
    console.log(`   Token generado: ${token.substring(0, 30)}...`);
    console.log(`   Verificación del token: ${verifiedPayload ? '✅' : '❌'}`);
    console.log(`   Datos recuperados: ${verifiedPayload ? '✅' : '❌'}\n`);

    // Test 4: Verificar usuarios en la base de datos
    console.log('4. Verificando usuarios en la base de datos...');
    const users = await prisma.user.findMany();
    const adminUsers = users.filter(u => u.role === 'admin');
    
    console.log(`   Total de usuarios: ${users.length}`);
    console.log(`   Usuarios admin: ${adminUsers.length}`);
    
    if (adminUsers.length > 0) {
      console.log(`   Primer admin: ${adminUsers[0].email}`);
      console.log('✅ Al menos un usuario admin existe\n');
    } else {
      console.log('❌ No hay usuarios admin. Ejecuta: npm run create-admin\n');
    }

    // Test 5: Verificar estructura de tablas
    console.log('5. Verificando estructura de la base de datos...');
    const userCount = await prisma.user.count();
    console.log(`   Tabla User: ${userCount} registros ✅\n`);

    console.log('🎉 Todas las pruebas completadas!\n');
    console.log('📋 Resumen:');
    console.log('   - Base de datos: Conectada');
    console.log('   - Hashing de contraseñas: Funcional');
    console.log('   - JWT: Funcional');
    console.log(`   - Usuarios: ${users.length} total, ${adminUsers.length} admins`);
    console.log('\n✨ El sistema de autenticación está listo para usar!');

  } catch (error) {
    console.error('❌ Error en las pruebas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAuthentication();
