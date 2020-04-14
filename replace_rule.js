/**
 * NProxy 代理配置文件，执行命令：
 * nproxy -l replace_rule.js
 */
module.exports = [
 
  // 1. replace single file with local one
  {
    pattern: 'homepage.js',      // Match url you wanna replace
    responder:  '/home/goddyzhao/workspace/homepage.js'
  },
 
  // 2. replace single file with web file
  {
    pattern: 'https://static.gameboxmall.com/show/lolskin/js/lolskin.js',      // Match url you wanna replace
    responder:  'http://127.0.0.1:8080/js/lolskin.js'
  },
 
  // 3. replace combo file with src with absolute file path
  {
    pattern: 'group/homepageTileFramework.*.js',
    responder: [
      '/home/goddyzhao/workspace/webapp/ui/homepage/js/a.js',
      '/home/goddyzhao/workspace/webapp/ui/homepage/js/b.js',
      '/home/goddyzhao/workspace/webapp/ui/homepage/js/c.js'
    ]
  },
 
  // 4. replace combo file with src with relative file path and specified dir
  {
    pattern: 'group/homepageTileFramework.*.js',
    responder: {
      dir: '/home/goddyzhao/workspace/webapp/ui/homepage/js',
      src: [
        'a.js',
        'b.js',
        'c.js'
      ]
    }
  },
 
  // 5. Map server image directory to local image directory
  {
    pattern: 'https://xxx/img/res/lolskin/*.png',  // must be a string
    responder: 'http://127.0.0.1:8080/img/res/lolskin/*.png' //must be a absolute directory path
  },
 
  // 6. Write responder with regular expression variables like $1, $2
  {
    pattern: /https?:\/\/[\w\.]*(?::\d+)?\/ui\/(.*)_dev\.(\w+)/,
    responder: 'http://localhost/proxy/$1.$2'
  },
 
  // 7. Map server image directory to local image directory with regular expression
  // This simple rule can replace multiple directories to corresponding locale ones
  // For Example,
  //   http://host:port/ui/a/img/... => /home/a/image/...
  //   http://host:port/ui/b/img/... => /home/b/image/...
  //   http://host:port/ui/c/img/... => /home/c/image/...
  //   ...
  {
    pattern: /ui\/(.*)\/img\//,
    responder: '/home/$1/image/'
  }
];