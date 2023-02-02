export default {
  "/framework/": [
    {
      text: 'Vue',
      collapsible: true,//折叠按钮: 默认true展示
      collapsed: false,//是否可折叠: true为折叠,false为展开,不配置则展开全部并不显示折叠按钮
      items: [
        { text: '列表最后一条数据删除处理', link: '/framework/vue/列表最后一条数据删除处理' },
      ],
    },
    {
      text: 'React',
      collapsed: false,
      items: [
        { text: 'React基础总结一', link: '/framework/react/React基础总结一' },
      ],
    },
    {
      text: 'Angular',
      collapsed: false,
      items: [
        { text: 'Angular基础总结一', link: '/framework/angular/Angular基础总结一' },
        { text: 'Angular基础总结二', link: '/framework/angular/Angular基础总结二' },
        { text: 'Angular基础总结三', link: '/framework/angular/Angular基础总结三' },
      ],
    },
  ]
}