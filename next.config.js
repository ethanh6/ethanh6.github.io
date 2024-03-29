// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: '/nextjs-github-pages',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  /* images: { */
  /*   domains: ['rdl.ink'], */
  /* }, */
  /* webpack: (config, { isServer }) => { */
  /*   if (!isServer) { */
  /*     config.resolve.fallback.fs = false; */
  /*   } */
  /*   config.module.rules.push({ */
  /*     test: /\.md|\.mdx$/, */
  /*     use: 'raw-loader', */
  /*   }); */
  /**/
  /*   return config; */
  /* }, */
};
