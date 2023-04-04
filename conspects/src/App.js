import { useEffect, useState} from 'react';
import Equivalents from './conspects/Equivalents';
import Params from './conspects/Params';
import Planimetry from './conspects/Planimetry';
import IndexPage from './IndexPage';
import Page404 from './Page404';

function App() {
  
  const page_url_param = '?page=';
  const indexPageName = 'Математика';
  const extractPage = () => {
    var url = document.location.href.split(page_url_param);
    if(url.length > 1) {
      return decodeURIComponent(url[1]);
    }
    return indexPageName;
  };
  const [page, setPage] = useState(extractPage());
  const tex = str => `\\(${str}\\)`;
  const p = (pageName) => {
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.window = url => () => window.open(url.indexOf('://')!==-1?url:document.location.href.split(page_url_param)[0]+page_url_param+url);
    pageRouter.navigate = name => e => {
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
      var offset = ref.current.offsetTop;
      var d = Math.sign(offset-window.scrollY+20);
      const scrollSpeed = 25;
      var timer = setInterval(() => {
        if(Math.abs(window.scrollY - offset)>=scrollSpeed) {
          window.scrollTo(0, window.scrollY+d*scrollSpeed);
        }
        else {
          ref.current.scrollIntoView();
          clearInterval(timer);
        }
      }, 1);
    };
    // pageRouter.scroll = ref => () => ref.current.scrollIntoView();
    pageRouter.scroll = ref => () => scrollFunction(ref);
    pageRouter.tex = tex;
    return pageRouter;
  }

  useEffect(() => {
    document.title = page;
    // eslint-disable-next-line
    eval('MathJax.typeset()');
  }, [page]);

  return (
    <div className="App">
      <IndexPage page={p(indexPageName)} />
      <Page404 page={p('404')} />
      <Equivalents page={p('Переходы')} />
      <Planimetry page = {p('Планиметрия')} />
      <Params page={p('Параметры')} />
    </div>
  );
}

export default App;
