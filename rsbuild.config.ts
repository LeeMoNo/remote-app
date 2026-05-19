import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote_app', // 当前应用的名字
      filename: 'remoteEntry.js', // 产出的 manifest 文件名
      exposes: {
        './Button': './src/components/Button.tsx', // 暴露的组件别名与真实路径
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
  ],
  server: {
    port: 3001, // 锁定端口为 3001
  },
});