export default {
  css: {
    transformer: 'lightningcss',
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    cssMinify: 'lightningcss'
  }
};
