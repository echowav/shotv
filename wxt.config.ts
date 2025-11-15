import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Shotv",
    description: "Shotv, takes screenshot on video",
    permissions: ['activeTab'],
    host_permissions: ['<all_urls>'],
  },
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
});
