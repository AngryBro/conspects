import { useEffect, useState } from 'react';
import Page from './Page';
import Defs from './Defs';

function App() {
  
  const [page, setPage] = useState('index');
  
  const currentPage = (pageName) => {
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.link = name => () => setPage(name);
    return pageRouter;
  }

  useEffect(() => {
    // MathJax.typeset(); // eslint-disable-next-line
    // eslint-disable-next-line
    eval('MathJax.typeset()');
  }, [page]);

  return (
    <div className="App">
      <Page page={currentPage('index')} />
      <Defs page={currentPage('defs')}/>
    </div>
  );
}

export default App;
