import { useEffect, useState} from 'react';
import Equivalents from './conspects/Equivalents';
import Defs from './Defs';
import IndexPage from './IndexPage';
import Page404 from './Page404';

function App() {
  
  const indexPageName = 'Математика';
  const extractPage = () => {
    var url = document.location.href.split('?page=');
    if(url.length > 1) {
      return decodeURIComponent(url[1]);
    }
    return indexPageName;
  };
  const [page, setPage] = useState(extractPage());
  
  const p = (pageName) => {
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.navigate = name => () => setPage(name);
    pageRouter.window = url => () => window.open(url);
    pageRouter.index = pageRouter.navigate(indexPageName);
    return pageRouter;
  }

  useEffect(() => {
    document.title = page;
    // MathJax.typeset(); // eslint-disable-next-line
    // eslint-disable-next-line
    eval('MathJax.typeset()');
  }, [page]);

  return (
    <div className="App">
      <IndexPage page={p(indexPageName)} />
      <Defs page={p('123')}/>
      <Page404 page={p('404')} />
      <Equivalents page={p('Переходы')} />
    </div>
  );
}

export default App;
