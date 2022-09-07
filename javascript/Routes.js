import Home from "../pages/Home";
import Player from "../pages/Player";
import Download from "../pages/Download";


const router = new Navigo(null, true, '#');

export default class RouteHandler{
    constructor(){
        this.createRoute()
    }

    createRoute(){
        const routes = [
            { path: '/', page: Home },
            { path: '/player', page: Player },
            { path: '/download', page: Download },
            // { path: '/article', page: Article }
        ];

        routes.forEach(({ path, page}) => {
            router.on(path, () => {
                page(path)
            }).resolve();
        })
    }
};


