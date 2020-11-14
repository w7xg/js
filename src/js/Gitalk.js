const gitalk = new Gitalk({
  clientID: '45dda892b6ea92ebd7cc',
  clientSecret: '47b019d33e337e090c9c67907dea0080680c9663',
  repo: 'js',      // The repository of store comments,
  owner: 'w7xg',
  admin: ['w7xg'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')
