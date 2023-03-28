import { useEffect, useState} from 'react';
import Equivalents from './conspects/Equivalents';
import Planimetry from './conspects/Planimetry';
import Defs from './Defs';
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
  
  const p = (pageName) => {
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.window = url => () => window.open(url);
    pageRouter.navigate = name => e => {
      if(e.ctrlKey) {
        var prev_url = document.location.href;
        prev_url = prev_url.split(page_url_param)[0];
        window.open(prev_url+page_url_param+name);
      }
      else {
        if(name === indexPageName && document.location.href.indexOf(page_url_param)!==-1) {
          document.location.href = '/';
        }
        else {
          setPage(name);
        }
      }
    };
    pageRouter.index = pageRouter.navigate(indexPageName);
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
      <Defs page={p('123')}/>
      <Page404 page={p('404')} />
      <Equivalents page={p('Переходы')} />
      <Planimetry page = {p('Планиметрия')} />
    </div>
  );
}

export default App;
