import  React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './Admin';
import Login from './pages/login'
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import UIbuttons from "./pages/ui/buttons";
import UImodals from "./pages/ui/modals";
import UIloadings from "./pages/ui/loadings";
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import NoMatch from "./pages/nomatch/page404";
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import Resume from './pages/resume'
export default class IRouter extends React.Component{

    render () {
        return(
            <HashRouter>
                <App>
                    <Switch>
                        {/*admin的同级路由*/}
                        <Route path="/login" component={Login}/>

                        {/*需要先渲染admin组件的嵌套路由*/}
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route  path='/admin' component={Home}></Route>
                                    <Route  path='/ui/buttons' component={UIbuttons}></Route>
                                    <Route  path='/ui/modals' component={UImodals}></Route>
                                    <Route  path='/ui/loadings' component={UIloadings}></Route>
                                    <Route  path="/ui/notification" component={Notice} />
                                    <Route  path="/ui/messages" component={Messages} />
                                    <Route  path="/ui/tabs" component={Tabs} />
                                    <Route  path="/ui/gallery" component={Gallery} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path="/resume/view" component={Resume} />
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        }/>

                    </Switch>
                </App>
            </HashRouter>
        )
    }
}