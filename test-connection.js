/**
 * Test de conexión a Acurast Canary
 * 
 * Este script verifica que podemos conectarnos correctamente
 * a la red Acurast Canary usando Polkadot.js API
 */

import { ApiPromise, WsProvider, HttpProvider } from '@polkadot/api';

// Configuración
const RPC_ENDPOINT = process.env.ACURAST_RPC_ENDPOINT || 'https://api-acurast-canary.n.dwellir.com/YOUR_API_KEY_HERE';

async function testConnection() {
  console.log('🔌 Conectando a Acurast Canary...');
  console.log(`📡 Endpoint: ${RPC_ENDPOINT.replace(/\/[^/]+$/, '/***')}\n`);

  try {
    // Detectar tipo de provider (HTTP o WebSocket)
    let provider;
    if (RPC_ENDPOINT.startsWith('http')) {
      console.log('🌐 Usando HTTP Provider...');
      provider = new HttpProvider(RPC_ENDPOINT);
    } else {
      console.log('🔌 Usando WebSocket Provider...');
      provider = new WsProvider(RPC_ENDPOINT, false, {}, 30000);
    }
    
    // Conectar a la API con timeout
    console.log('⏳ Esperando respuesta (timeout: 30s)...\n');
    
    const api = await Promise.race([
      ApiPromise.create({ provider }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout: No se pudo conectar en 30 segundos')), 30000)
      )
    ]);
    
    console.log('✅ Conexión exitosa!\n');
    
    // Obtener información básica de la chain
    console.log('📊 Información de la Chain:');
    console.log('─'.repeat(50));
    
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version()
    ]);
    
    console.log(`Chain:        ${chain}`);
    console.log(`Node:         ${nodeName}`);
    console.log(`Version:      ${nodeVersion}`);
    
    // Obtener último bloque
    const lastHeader = await api.rpc.chain.getHeader();
    console.log(`Último bloque: #${lastHeader.number}`);
    
    // Listar pallets disponibles
    console.log('\n📦 Pallets disponibles:');
    console.log('─'.repeat(50));
    
    const metadata = await api.rpc.state.getMetadata();
    const pallets = metadata.asLatest.pallets;
    
    // Buscar pallets relacionados con Acurast
    const acurastPallets = pallets.filter(p => 
      p.name.toString().toLowerCase().includes('acurast')
    );
    
    if (acurastPallets.length > 0) {
      console.log('\n🎯 Pallets de Acurast encontrados:');
      acurastPallets.forEach(pallet => {
        console.log(`  - ${pallet.name}`);
      });
    } else {
      console.log('\n⚠️  No se encontraron pallets con "acurast" en el nombre');
      console.log('Mostrando todos los pallets:\n');
      pallets.forEach(pallet => {
        console.log(`  - ${pallet.name}`);
      });
    }
    
    console.log('\n✅ Test completado exitosamente!');
    
    // Desconectar
    await api.disconnect();
    
  } catch (error) {
    console.error('\n❌ Error de conexión:');
    console.error(error.message);
    
    if (error.message.includes('401') || error.message.includes('403')) {
      console.error('\n💡 Verifica que tu API Key sea correcta');
    }
    
    process.exit(1);
  }
}

// Ejecutar test
testConnection();
