README.md
Documento que proporciona una descripción general del proyecto, instrucciones de configuración y uso.

contracts/
Carpeta que contiene los contratos inteligentes.

VulnerableContract.sol
Contrato inteligente con vulnerabilidad de reentrancy.
AttackerContract.sol: Contrato inteligente que explota la vulnerabilidad de reentrancy.
SecureContract.sol: Contrato inteligente con la vulnerabilidad mitigada utilizando el patrón "Checks-Effects-Interactions".
scripts/: Carpeta que contiene scripts de despliegue y utilidades.

deploy.js
Script para desplegar los contratos inteligentes en la red blockchain.
test/: Carpeta que contiene pruebas automatizadas.

attackerTest.js:Pruebas para verificar el ataque de reentrancy.
secureTest.js:Pruebas para verificar la mitigación de la vulnerabilidad.
artifacts/:Carpeta generada automáticamente que contiene los artefactos de compilación de los contratos inteligentes (ABIs, bytecode, etc.).

migrations/:Carpeta que contiene scripts de migración de Truffle.

1_deploy_contracts.js: Script de migración para desplegar los contratos.
truffle-config.js: Archivo de configuración para Truffle, donde se configuran las redes, compiladores y otros parámetros.

package.json: Archivo de configuración de npm que contiene las dependencias y scripts del proyecto.

.gitignore: Archivo para excluir archivos y carpetas específicas del control de versiones de Git.
