const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage", // or "entry"
      corejs: 3
    }
  ]
];

module.exports = { presets };
