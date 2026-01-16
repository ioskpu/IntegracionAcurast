/**
 * Consultar Deployment de Acurast - Versión Final
 * 
 * Uso: node query-deployment.js <job-id> [wallet-address]
 * 
 * Ejemplos:
 *   node query-deployment.js 303867
 *   node query-deployment.js 303867 5EXZxqD6UiuKRDUoT83N7rpTkMB6aqh8j6k8BCP9JF1hjXaT
 */

import { ApiPromise, HttpProvider } from '@polkadot/api';

// Configuración
const RPC_ENDPOINT = process.env.ACURAST_RPC_ENDPOINT || 'https://api-acurast-canary.n.dwellir.com/YOUR_API_KEY_HERE';
const JOB_ID = parseInt(process.argv[2] || process.env.DEPLOYMENT_ID || '303867');
const WALLET_ADDRESS = process.argv[3] || 'YOUR_WALLET_ADDRESS_HERE';

async function queryDeployment() {
  console.log('🔍 Consultando Deployment de Acurast\n');
  console.log(`📡 Endpoint: ${RPC_ENDPOINT.replace(/\/[^/]+$/, '/***')}`);
  console.log(`🆔 Job ID: ${JOB_ID}`);
  console.log(`👤 Wallet: ${WALLET_ADDRESS.slice(0, 10)}...${WALLET_ADDRESS.slice(-8)}\n`);

  try {
    // Conectar
    console.log('⏳ Conectando...');
    const provider = new HttpProvider(RPC_ENDPOINT);
    const api = await ApiPromise.create({ provider });
    console.log('✅ Conectado\n');

    // Formato correcto del origin
    const origin = { Acurast: WALLET_ADDRESS };

    // 1. Consultar Job Registration
    console.log('─'.repeat(70));
    console.log('📋 JOB REGISTRATION');
    console.log('─'.repeat(70));
    
    const jobReg = await api.query.acurast.storedJobRegistration(origin, JOB_ID);
    
    if (jobReg.isEmpty) {
      console.log('❌ Job no encontrado\n');
      console.log('💡 Verifica:');
      console.log(`   - Job ID: ${JOB_ID}`);
      console.log(`   - Wallet: ${WALLET_ADDRESS}`);
      console.log(`   - El job puede haber expirado y sido eliminado\n`);
      await api.disconnect();
      return;
    }

    const jobData = jobReg.toJSON();
    const jobHuman = jobReg.toHuman();
    
    console.log('\n📄 Script:');
    console.log(`   ${jobHuman.script}`);
    
    console.log('\n⏰ Schedule:');
    console.log(`   Start:        ${new Date(parseInt(jobHuman.schedule.startTime.replace(/,/g, ''))).toISOString()}`);
    console.log(`   End:          ${new Date(parseInt(jobHuman.schedule.endTime.replace(/,/g, ''))).toISOString()}`);
    console.log(`   Duration:     ${jobHuman.schedule.duration} ms`);
    console.log(`   Interval:     ${jobHuman.schedule.interval} ms`);
    console.log(`   Max Delay:    ${jobHuman.schedule.maxStartDelay} ms`);
    
    console.log('\n💰 Requirements:');
    console.log(`   Slots:        ${jobHuman.extra.requirements.slots}`);
    console.log(`   Reward:       ${jobHuman.extra.requirements.reward} (${(parseInt(jobHuman.extra.requirements.reward.replace(/,/g, '')) / 1e12).toFixed(6)} cACU)`);
    console.log(`   Strategy:     ${Object.keys(jobHuman.extra.requirements.assignmentStrategy)[0]}`);
    console.log(`   Runtime:      ${jobHuman.extra.requirements.runtime}`);
    console.log(`   Min Rep:      ${jobHuman.extra.requirements.minReputation}`);
    
    console.log('\n🔒 Security:');
    console.log(`   Only Verified: ${jobHuman.allowOnlyVerifiedSources}`);
    console.log(`   Allowed Sources: ${jobHuman.allowedSources || 'Any'}`);

    // 2. Consultar Job Status
    console.log('\n' + '─'.repeat(70));
    console.log('📊 JOB STATUS');
    console.log('─'.repeat(70));
    
    const jobStatus = await api.query.acurastMarketplace.storedJobStatus(origin, JOB_ID);
    
    if (!jobStatus.isEmpty) {
      const statusData = jobStatus.toHuman();
      console.log(`\n   Estado: ${Object.keys(statusData)[0]}`);
      console.log(`   Valor:  ${Object.values(statusData)[0]}`);
    } else {
      console.log('\n   ⚠️  No hay información de status');
    }

    // 3. Consultar Assigned Processors
    console.log('\n' + '─'.repeat(70));
    console.log('🖥️  ASSIGNED PROCESSORS');
    console.log('─'.repeat(70));
    
    // El formato correcto es solo el JobId como tuple
    const jobIdTuple = [{ Acurast: WALLET_ADDRESS }, JOB_ID];
    
    try {
      const assignedProc = await api.query.acurastMarketplace.assignedProcessors(jobIdTuple);
      
      if (!assignedProc.isEmpty) {
        console.log(`\n   ✅ Procesador asignado`);
        console.log(`   Datos: ${assignedProc.toHuman()}`);
      } else {
        console.log('\n   ⚠️  No hay procesadores asignados aún');
      }
    } catch (e) {
      console.log(`\n   ⚠️  No se pudo consultar procesadores: ${e.message}`);
    }

    // 4. Consultar Job Budget
    console.log('\n' + '─'.repeat(70));
    console.log('💵 JOB BUDGET');
    console.log('─'.repeat(70));
    
    const budget = await api.query.acurastMarketplace.jobBudgets(origin, JOB_ID);
    
    if (!budget.isEmpty) {
      const budgetAmount = budget.toString();
      console.log(`\n   Budget locked: ${budgetAmount} (${(parseInt(budgetAmount) / 1e12).toFixed(6)} cACU)`);
    } else {
      console.log('\n   ⚠️  No hay budget registrado');
    }

    // 5. Resumen
    console.log('\n' + '─'.repeat(70));
    console.log('📈 RESUMEN');
    console.log('─'.repeat(70));
    
    const now = Date.now();
    const startTime = parseInt(jobHuman.schedule.startTime.replace(/,/g, ''));
    const endTime = parseInt(jobHuman.schedule.endTime.replace(/,/g, ''));
    
    let timeStatus;
    if (now < startTime) {
      timeStatus = `⏳ Pendiente (inicia en ${Math.round((startTime - now) / 1000 / 60)} minutos)`;
    } else if (now > endTime) {
      timeStatus = `✅ Finalizado (terminó hace ${Math.round((now - endTime) / 1000 / 60)} minutos)`;
    } else {
      timeStatus = `🟢 Activo (termina en ${Math.round((endTime - now) / 1000 / 60)} minutos)`;
    }
    
    console.log(`\n   Job ID:       ${JOB_ID}`);
    console.log(`   Estado:       ${timeStatus}`);
    console.log(`   Script:       ${jobHuman.script.slice(0, 50)}...`);
    console.log(`   Reward:       ${(parseInt(jobHuman.extra.requirements.reward.replace(/,/g, '')) / 1e12).toFixed(6)} cACU`);
    
    console.log('\n✅ Consulta completada\n');
    
    await api.disconnect();

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

queryDeployment();
