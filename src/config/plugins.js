/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
*/

import metagenPlugin from 'eleventy-plugin-metagen';
import { EleventyRenderPlugin } from "@11ty/eleventy";

export default {
  /**
   * Metagen plugin
   * https://github.com/tannerdolby/eleventy-plugin-metagen
   */
  metagen: async function (eleventyConfig) {
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(metagenPlugin);
  },

  /**
   * Eleventy Render plugin
   * https://www.11ty.dev/docs/plugins/render/
   */
  render: async function (eleventyConfig) {
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(EleventyRenderPlugin);
  }
}
