module.exports = {
  branches: ["main", { name: "beta", prerelease: true }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        message:
          // eslint-disable-next-line no-template-curly-in-string
          "chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
