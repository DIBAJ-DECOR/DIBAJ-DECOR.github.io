for(let e of document.images){let s=e.getAttribute('src');if(s&&s.indexOf('../')!=0&&s.indexOf('/')!=0&&s.indexOf('http')!=0)e.src='../'+s}
