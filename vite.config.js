import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

export default {
  plugins: [
    svgr(),
    url(),
    // other plugins...
  ],
  // other config...
};
