module.exports = () => ({
    registry: "https://github.com/hananwaqar/react-native-monorepo.git",
    getTagName: (pkg) => `${pkg.version}`,
  });