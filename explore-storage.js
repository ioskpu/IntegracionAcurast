/**
 * Explorar estructura de storage de Acurast
 * 
 * Este script explora en detalle los métodos de storage
 * para entender cómo consultar deployments/jobs
 */

import { ApiPromise, HttpProvider } from '@polkadot/api';

const RPC_ENDPOINT = process.env.ACURAST_RPC_ENDPOINT || 'https://api-acurast-canary.n.dwellir.com/YOUR_API_KEY_HERE';

async function exploreStorage() {
  console.log('🔍 Explorando Storage de Acurast Canary\n');

  try {
    const provider = new HttpProvider(RPC_ENDPOINT);
    const api = await ApiPromise.create({ provider });
    console.log('✅ Conectado\n');

    // Explorar pallet Acurast
    console.log('📦 PALLET: Acurast');
    console.log('─'.repeat(60));
    
    const acurastMethods = Object.keys(api.query.acurast);
    
    for (const method of acurastMethods) {
      console.log(`\n🔹 ${method}`);
      
      // Intentar obtener metadata del método
      const meta = api.query.acurast[method].meta;
      if (meta) {
        console.log(`   Tipo: ${meta.type}`);
        console.log(`   Docs: ${meta.docs.join(' ')}`);
      }
      
      // Si es un map, intentar obtener las keys
      if (meta && meta.type.isMap) {
        console.log(`   Es un Map - Requiere key`);
        console.log(`   Key type: ${meta.type.asMap.key.toString()}`);
        console.log(`   Value type: ${meta.type.asMap.value.toString()}`);
      }
      
      // Si no requiere parámetros, intentar obtener el valor
      if (meta && meta.type.isPlain) {
        try {
          const value = await api.query.acurast[method]();
          console.log(`   Valor actual: ${value.toString()}`);
        } catch (e) {
          console.log(`   Error al obtener valor: ${e.message}`);
        }
      }
    }

    // Explorar pallet AcurastMarketplace
    console.log('\n\n📦 PALLET: AcurastMarketplace');
    console.log('─'.repeat(60));
    
    const marketplaceMethods = Object.keys(api.query.acurastMarketplace);
    
    for (const method of marketplaceMethods) {
      console.log(`\n🔹 ${method}`);
      
      const meta = api.query.acurastMarketplace[method].meta;
      if (meta) {
        console.log(`   Tipo: ${meta.type}`);
        console.log(`   Docs: ${meta.docs.join(' ')}`);
        
        if (meta.type.isMap) {
          console.log(`   Key type: ${meta.type.asMap.key.toString()}`);
          console.log(`   Value type: ${meta.type.asMap.value.toString()}`);
        }
      }
    }

    // Intentar consultar con tu wallet address
    console.log('\n\n🔍 INTENTANDO CONSULTAS ESPECÍFICAS');
    console.log('─'.repeat(60));
    
    const yourAddress = 'YOUR_WALLET_ADDRESS_HERE';
    
    console.log(`\n📌 Consultando con tu address: ${yourAddress.slice(0, 10)}...`);
    
    // Probar storedJobRegistration con formato correcto (2 argumentos)
    const multiOrigins = [
      { AcurastCanary: yourAddress },
      { Acurast: yourAddress }
    ];
    
    const jobIds = [303867, 306634]; // Último ID según localJobIdSequence
    
    for (const origin of multiOrigins) {
      for (const jobId of jobIds) {
        try {
          console.log(`\n   Probando: storedJobRegistration(${JSON.stringify(origin)}, ${jobId})`);
          const result = await api.query.acurast.storedJobRegistration(origin, jobId);
          
          if (result && !result.isEmpty) {
            console.log(`   ✅ ENCONTRADO!`);
            console.log(`   Datos (human):`, JSON.stringify(result.toHuman(), null, 2));
            console.log(`   Datos (JSON):`, JSON.stringify(result.toJSON(), null, 2));
            break;
          } else {
            console.log(`   ⚠️  Vacío`);
          }
        } catch (e) {
          console.log(`   ❌ Error: ${e.message}`);
        }
      }
    }

    // Probar storedJobStatus en marketplace
    console.log(`\n\n📌 Consultando storedJobStatus en marketplace...`);
    
    for (const origin of multiOrigins) {
      for (const jobId of jobIds) {
        try {
          console.log(`\n   Probando: storedJobStatus(${JSON.stringify(origin)}, ${jobId})`);
          const result = await api.query.acurastMarketplace.storedJobStatus(origin, jobId);
          
          if (result && !result.isEmpty) {
            console.log(`   ✅ ENCONTRADO!`);
            console.log(`   Datos (human):`, JSON.stringify(result.toHuman(), null, 2));
            console.log(`   Datos (JSON):`, JSON.stringify(result.toJSON(), null, 2));
            break;
          } else {
            console.log(`   ⚠️  Vacío`);
          }
        } catch (e) {
          console.log(`   ❌ Error: ${e.message}`);
        }
      }
    }

    // Intentar listar todas las entries
    console.log(`\n\n📌 Intentando listar todas las job registrations...`);
    try {
      const entries = await api.query.acurast.storedJobRegistration.entries();
      console.log(`   Total encontradas: ${entries.length}`);
      
      if (entries.length > 0) {
        console.log(`\n   Primeras 3 entries:`);
        entries.slice(0, 3).forEach(([key, value]) => {
          console.log(`\n   Key: ${key.toHuman()}`);
          console.log(`   Value: ${JSON.stringify(value.toHuman(), null, 2)}`);
        });
      }
    } catch (e) {
      console.log(`   ❌ Error: ${e.message}`);
    }

    console.log('\n\n✅ Exploración completada\n');
    await api.disconnect();

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

exploreStorage();
