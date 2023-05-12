import { useEffect, useState} from 'react';
import Routes from './Routes';

function App() {
  
  const page_url_param = '?page=';
  const indexPageName = 'Математика';
  // const page404 = '404';
  const extractPage = () => {
    var url = document.location.href.split(page_url_param);
    if(url.length > 1) {
      var url_page = decodeURIComponent(url[1]);
      // if(!all_pages.includes(url_page)) {
      //   url_page = page404;
      // }
      return url_page;
    }
    return indexPageName;
  };

  const [page, setPage] = useState(extractPage());
  // const [all_pages, setAllPages] = useState([]);

  const tex = str => `\\(${str}\\)`;
  const route = (pageName) => {
    // var temp = JSON.parse(JSON.stringify(all_pages));
    // temp.push(pageName);
    // setAllPages(temp);
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.window = url => () => window.open(url.indexOf('://')!==-1?url:document.location.href.split(page_url_param)[0]+page_url_param+url);
    pageRouter.navigate = name => e => {
      // if(!all_pages.includes(name)) {
      //   name = page404;
      // }
      if(e.ctrlKey) {
        var prev_url = document.location.href;
        prev_url = prev_url.split(page_url_param)[0];
        window.open(prev_url+page_url_param+name);
      }
      else {
        if(name === indexPageName && document.location.href.indexOf(page_url_param)!==-1) {
          document.location.href = document.location.href.split(page_url_param)[0];
        }
        else {
          setPage(name);
        }
      }
    };
    pageRouter.index = pageRouter.navigate(indexPageName);
    const scrollFunction = (ref) => {
      var offsetTarget = ref.current.offsetTop
      var offsetCurrent = window.scrollY;
      var offset = offsetTarget - offsetCurrent;
      const scrollSpeed = 35;
      var scrollLength = 0;
      var firstOffset = offset % scrollSpeed;
      offset -= firstOffset;
      window.scrollTo(0, window.scrollY+firstOffset);
      var timer = setInterval(() => {
          if(Math.abs(scrollLength - Math.abs(offset))>=scrollSpeed) {
            window.scrollTo(0, window.scrollY+scrollSpeed*Math.sign(offset));
            scrollLength += Math.abs(scrollSpeed);
          } 
          else {
            clearInterval(timer)
          }
      }, 1);
    }
    pageRouter.scroll = ref => () => scrollFunction(ref);
    pageRouter.tex = tex;
    return pageRouter;
  }

  route.indexPage = indexPageName;

  useEffect(() => {
    document.title = page;
    // eslint-disable-next-line
    eval('MathJax.typeset()');
  }, [page]);

  return (
      <Routes $={route} />
  );
}

export default App;
