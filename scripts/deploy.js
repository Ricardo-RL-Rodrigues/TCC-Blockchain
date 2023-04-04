const { ethers } = require("hardhat");

module.exports = async  function main(mensagem) {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy(mensagem);
  console.log("Contrato armazenado no endereço:", hello_world.address);
  return hello_world.address;
}


/*async function main() {
   const HelloWorld = await ethers.getContractFactory("HelloWorld");

   
   const hello_world = await HelloWorld.deploy("Hello World!");
   console.log("Contract deployed to address:", hello_world.address);}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
*/