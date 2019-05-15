// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  { path: '/test', title: '测试 1', icon: 'folder-o' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  }
]
