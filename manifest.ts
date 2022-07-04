import { ManifestV3Export } from '@crxjs/vite-plugin'

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'Hitokoto',
  version: '0.0.1',
  chrome_url_overrides: {
    newtab: 'index.html'
  }
}

export default manifest
