const path = require('path')

module.exports = {
  '*.js': ['prettier --config .prettierrc.js --write', 'eslint --fix --ext .js'],
  '*.json': 'prettier --config .prettierrc.js --write',
  '*.wxss': absolutePaths => {
    // 获取相对路径
    // const cwd = process.cwd()
    // const relativePaths = absolutePaths.map(file => path.relative(cwd, file))
    // return `gulp wxss --path ${relativePaths.join(' ')}`

    return 'gulp wxss'
  },
  '*.acss': 'gulp acss'
}
