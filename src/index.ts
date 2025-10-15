import { bootstrap } from './bootstrap.js';

async function main() {
  try {
    console.log('--> [DEBUG] Attempting to bootstrap the server...');
    await bootstrap();
    console.log('--> [DEBUG] Bootstrap completed successfully. The server should be running.');
  } catch (error) {
    console.error('!!! A FATAL ERROR OCCURRED DURING BOOTSTRAP !!!');
    console.error(error);
    process.exit(1); // Exit with a failure code to ensure the container stops
  }
}

main();

