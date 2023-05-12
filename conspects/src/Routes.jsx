import IndexPage from './IndexPage';
import Page404 from './Page404';
import Equivalents from './conspects/Equivalents';
import Planimetry from './conspects/Planimetry';
import Params from './conspects/Params';
import Test from './Test';
import Oxy from './conspects/Oxy';

const Routes = ({$}) => {

    return <div className="App">
    <IndexPage page={$($.indexPage)} />
    <Page404 page={$('404')} />
    <Equivalents page={$('Переходы')} />
    <Planimetry page = {$('Планиметрия')} />
    <Params page={$('Параметры')} />
    <Test page={$('test')} />
    <Oxy page={$('Oxy')} />
  </div>


};

export default Routes;