const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Reemplaza 'http://tu-web.com' con la URL de tu web
  await page.goto('http://pinkgoatalfajores.com');

  // Espera a que todo el contenido se cargue
  await page.waitForTimeout(5000); 

  // Obtén el rendimiento de la página
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  console.log('Performance Timing:', performanceTiming);

  await browser.close();
})();
