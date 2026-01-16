PS C:\Users\Luis\Documents\proyectos\web3\DePinAcurast> npm run query

> acurast-integration@1.0.0 query
> node acurast-query.js

🔍 Consultando Deployment de Acurast

📡 Endpoint: https://api-acurast-canary.n.dwellir.com/***
🆔 Deployment ID: 303867

⏳ Conectando...
2026-01-16 10:27:31        API/INIT: Api will be available in a limited mode since the provider does not support subscriptions
2026-01-16 10:27:37        REGISTRY: Unknown signed extensions Onboarding, StorageWeightReclaim found, treating them as no-effect
2026-01-16 10:27:37        API/INIT: RPC methods not decorated: chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop
2026-01-16 10:27:37        API/INIT: acurast-parachain/44: Not decorating runtime apis without matching versions: AuraUnincludedSegmentApi/2 (1 known)
2026-01-16 10:27:37        API/INIT: acurast-parachain/44: Not decorating unknown runtime apis: 0xccd9de6396c899ca/1
✅ Conectado a Acurast Canary

📦 Explorando pallet Acurast...
────────────────────────────────────────────────────────────

🔎 Storage queries disponibles en pallet Acurast:
  - palletVersion
  - localJobIdSequence
  - storedJobRegistration
  - executionEnvironment
  - storedAttestation
  - requiredMinMetrics
  - storedRevokedCertificate
  - v5MigrationState

─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
🔍 Intentando consultar deployment...

────────────────────────────────────────────────────────────
❌ NO SE ENCONTRÓ EL DEPLOYMENT
────────────────────────────────────────────────────────────

Posibles razones:
  1. El Deployment ID es incorrecto
  2. El deployment expiró y fue eliminado
  3. El método de consulta es diferente
  4. Los deployments no se almacenan on-chain de esta forma

💡 Sugerencias:
  - Verifica el Deployment ID en hub.acurast.com
  - Intenta con un deployment más reciente
  - Revisa la documentación de Acurast

─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
📚 INFORMACIÓN ADICIONAL
────────────────────────────────────────────────────────────

🔗 Otros pallets de Acurast disponibles:

  acurastProcessorManager:
    - palletVersion
    - lastManagerId
    - managedProcessors
    - processorToManagerIdIndex
    - managerCounter
    ... y 11 más

  acurastMarketplace:
    - palletVersion
    - storedJobStatus
    - storedJobExecutionStatus
    - storedAdvertisementRestriction
    - storedAdvertisementPricing
    ... y 14 más

  acurastCompute:
    - palletVersion
    - lastMetricPoolId
    - processors
    - managerMetricRewards
    - metricPools
    ... y 20 más

✅ Consulta completada

PS C:\Users\Luis\Documents\proyectos\web3\DePinAcurast> 