import { useEffect, useState} from 'react';
import Defs from './Defs';
import IndexPage from './IndexPage';
import Page404 from './Page404';

function App() {
  

  // const page_url = 
  const [page, setPage] = useState('index');
  
  const currentPage = (pageName) => {
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.link = name => () => setPage(name);
    pageRouter.window = url => () => window.open(url);
    return pageRouter;
  }

  useEffect(() => {
    // MathJax.typeset(); // eslint-disable-next-line
    // eslint-disable-next-line
    eval('MathJax.typeset()');
  }, [page]);

  return (
    <div className="App">
      <IndexPage page={currentPage('index')} />
      <Defs page={currentPage('defs')}/>
      <Page404 page={currentPage('404')} />
    </div>
  );
}

export default App;
