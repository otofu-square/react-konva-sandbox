module.exports = {
  extends: "react-app",
  rules: {
    "no-duplicate-imports": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "import/first": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
