const { hashElement } = require('folder-hash');

// const options = {
//   folders: { exclude: ['.*', 'node_modules', 'test_coverage'] },
//   files: { include: ['*.Fbx', '*.json', 'png', 'jpg'] },
// };

console.log('Creating a hash over the current folder:');
hashElement('../src-tauri/Windows')
  .then(hash => {
    console.log(hash.toString());
    console.log('hello')
  })
  .catch(error => {
    return console.error('hashing failed:', error);
  });