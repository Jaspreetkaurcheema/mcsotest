export default () => ({
  "import-export-entries": {
    enabled: true,
    config: {
      serverPublicHostname:
        "https://favorable-prosperity-9cd8662a35.strapiapp.com",
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
